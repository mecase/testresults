import typing
import strawberry
import datetime

@strawberry.type
class Users:
    uid: str
    gecos: str
    uidNumber: int
    eppns: typing.List[str]
#     status: 'Status'

# @strawberry.type
# class Status:
#     training_uptodate: bool
#     last_account_activity: str # datetime.datetime


@strawberry.type
class Query:
    usrs: typing.List[Users]

# def get_status(who) -> Status:
#     return Status(uid=who)

def get_users():
    return [
        Users (
            uid = "axj",
            gecos = "Alice Jones",
            uidNumber = 1111,
            eppns =[ "alice@gmail.com", "a.jones@stanford.edu" ],
            # status = Status (
            #                  trainingUptodate = True,
            #                  lastAccountActivity = "2022-03-01T15:48:12Z"  #datetime(2022,3,1,15,48,12)
            #            )
            ),
        Users (
            uid = "wns",
            gecos = "Ben Smith",
            uidNumber = 1261,
            eppns =[ "ben.smith@hotmail.com", "ben@yale.edu" ],
            # status = Status ( trainingUptodate = True,
            #                   lastAccountActivity = "2022-01-01T07:12:03Z" #datetime(2022,1,1,7,12,3) 
            #          )
            ),
    ]

@strawberry.type
class Query:
    usrs: typing.List[Users] = strawberry.field(resolver=get_users)

schema = strawberry.Schema(query=Query)


