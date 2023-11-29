import os
import requests
from flask import Flask, jsonify, redirect, request, url_for
# .env 환경변수
from dotenv import load_dotenv
# CORS
from flask_cors import CORS
# OAuth
from authlib.integrations.flask_client import OAuth
from datetime import datetime
# mysql
import pymysql as db

app = Flask(__name__)
load_dotenv()
CORS(app)
oauth = OAuth()
oauth.init_app(app)

# MySQL Configuration
MYSQL_HOST = app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST', default="default_value_if_not_present")
MYSQL_USER = app.config['MYSQL_USER'] = os.getenv('MYSQL_USER', default="default_value_if_not_present")
MYSQL_PASSWORD = app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD', default="default_value_if_not_present")
MYSQL_DB = app.config['MYSQL_DB'] = os.getenv('MYSQL_DB', default="default_value_if_not_present")

# Kakao Configuration
REST_API_KEY = os.getenv("KAKAO_API_KEY", default="default_value_if_not_present")
SECRET_KEY = os.getenv("KAKAO_SECRET_KEY", default="default_value_if_not_present")
REDIRECT_URI = os.getenv("REDIRECT_URI", default="default_value_if_not_present")

@app.route("/", methods=["GET"])
def main():
    return "Hello Python Flask"


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)


@app.route('/login/kakao')
def kakao_login():
    auth_url = f"https://kauth.kakao.com/oauth/authorize?response_type=code&prompt=login&client_id={REST_API_KEY}&client_secret={SECRET_KEY}&redirect_uri={REDIRECT_URI}"
    return redirect(auth_url)


@app.route('/login/kakao/callback')
def kakao_callback():
    auth_code = request.args.get('code')
    token_url = "https://kauth.kakao.com/oauth/token"
    payload = {
        'grant_type': 'authorization_code',
        'client_id': REST_API_KEY,
        'client_secret': SECRET_KEY,
        'redirect_uri': REDIRECT_URI,
        'code': auth_code,
    }

    token_response = requests.post(token_url, data=payload)
    access_token = token_response.json().get('access_token')

    profile_url = "https://kapi.kakao.com/v2/user/me"
    headers = {'Authorization': f'Bearer {access_token}'}

    profile_response = requests.get(profile_url, headers=headers)
    user_profile = profile_response.json()

    id = user_profile['id']
    email = user_profile['kakao_account']['email']
    nickname = user_profile['kakao_account']['profile']['nickname']

    if not is_email_exists(email):
        # id, email, nickname을 mysql user table에 저장
        conn = get_connection()
        cursor = conn.cursor()
        now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        cursor.execute(
            "INSERT INTO USER (username, password, name, email, oauth, state, createdAt, updatedAt) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)",
            (id, "None", nickname, email, "KAKAO", "ACTIVE", now, now))
        conn.commit()
        conn.close()

    # return f"Kakao login successful! User: {user_profile}"
    return redirect("http://localhost:3000")


# 데이터베이스 접속 함수
def get_connection():
    conn = db.connect(host=MYSQL_HOST, user=MYSQL_USER,
                      password=MYSQL_PASSWORD,
                      db=MYSQL_DB, charset='utf8')
    return conn


def is_email_exists(email):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM USER WHERE email = %s", (email,))
    result = cursor.fetchone()
    conn.close()
    return result is not None
