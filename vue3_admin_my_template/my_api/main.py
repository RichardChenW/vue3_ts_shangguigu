from fastapi import FastAPI,Header
from typing import Union
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

user_list = [
        {
            'userId': 1,
            'avatar':
                'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            'username': 'admin',
            'password': '111111',
            'desc': '平台管理员',
            'roles': ['平台管理员'],
            'buttons': ['cuser.detail'],
            'routes': ['home'],
            'token': 'Admin Token',
        },
        {
            'userId': 2,
            'avatar':'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            'username': 'system',
            'password': '111111',
            'desc': '系统管理员',
            'roles': ['系统管理员'],
            'buttons': ['cuser.detail', 'cuser.user'],
            'routes': ['home'],
            'token': 'System Token',
        }
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserAccount(BaseModel):
    username:str
    password:str

# 验证用户名密码是否正确
@app.post('/api/user/login')
def verify_user_account(user_account:UserAccount):
    for user_dict in user_list:
        if user_dict["username"] == user_account.username and user_dict["password"] == user_account.password:
            return { "code": 200, "data": { "message":"成功校验","userData":user_dict } }
    return { "code": 201, "data": { "message": '账号或者密码不正确' } }

# 验证用户 token 是否存在
@app.get('/api/user/info')
def get_user(token:Union[str,None]=Header(default=None)):
    
    if token:
        for user in user_list:
            if user["token"] == token:
                return { "code": 200, "data": user}
        else:
            return { "code": 201, "data": { "message": '账号不存在'}}
    else:
        return { "code": 201, "data": { "message": '账号或者密码不正确' } }

if __name__ == "__main__":
    uvicorn.run("main:app",host="127.0.0.1",port=8080,reload=True)