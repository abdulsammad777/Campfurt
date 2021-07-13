import mariadb
from flask import Flask, jsonify, render_template, request, Response, make_response
from flask import jsonify
import datetime as dt
from marshmallow import ValidationError
import db_config as config

class CampHandler():
    conn = None

    def __init__(self):
        try:
            self.conn = mariadb.connect(
            user="root",
            password="sammad@1a7",
            host="localhost",
            port=3306,
            database="campfurt")

        except mariadb.Error as e:

            print("Connection is not created")

            print(f"Error in connecting to database {e}")

    def getcampdata(self,email):
        try:
            cursor = self.conn.cursor()
            status = self.get_exisiting_camp_status(email, "pending")
            if (status == "pending"):
                query = f"SELECT * from camp where email ='{email}'"
                cursor.execute(query)
                result = cursor.fetchall()
                if cursor.rowcount == 0:
                   return {"Result":"Result not found"}, 400
                keys  = ['id', 'name', 'email', 'phone', 'type', 'message', 'sidingColor',
                         'sidingColorPrice', 'stripeColor', 'stripeColorPrice', 'lenght',
                         'width', 'height', 'spline', 'areaPrice', 'roofStyle', 'roofStylePrice',
                         'thickness', 'thicknessPrice', 'frontWindOne', 'frontWindOnePrice',
                         'frontWindTwo', 'frontWindTwoPrice', 'frontWindThree', 'frontWindThreePrice',
                         'frontDoor', 'frontDoorPrice', 'backWindOne', 'backWindOnePrice', 'backWindTwo',
                         'backWindTwoPrice', 'backWindThree', 'backWindThreePrice', 'backDoor',
                         'backDoorPrice', 'leftWindOne', 'leftWindOnePrice', 'leftWindTwo',
                         'leftWindTwoPrice', 'leftWindThree', 'leftWindThreePrice', 'leftDoor',
                         'leftDoorPrice', 'rightWindOne', 'rightWindOnePrice', 'rightWindTwo',
                         'rightWindTwoPrice', 'rightWindThree', 'rightWindThreePrice', 'rightDoor',
                         'rightDoorPrice', 'tprice', 'd_image_1', 'd_image_2', 'd_image_3', 'd_image_4', 'status']
                res_dic = {keys[i]: result[0][i] for i in range(0, len(keys), 1)}

                return jsonify(res_dic), 200

            if (status != "pending"):
                return "The camp is not on pending status."
        except Exception as e:
            return {"Result":f"Internal system error : {e}"}, 400

    def getcampbyid(self, id):
        try:
            cursor = self.conn.cursor()

            query = f"SELECT * from camp where id ='{id}'"
            cursor.execute(query)
            result = cursor.fetchall()
            if cursor.rowcount == 0:
                return {"Result":"Result not found"}, 400
            keys = ['id', 'name', 'email', 'phone', 'type', 'message', 'sidingColor',
                    'sidingColorPrice', 'stripeColor', 'stripeColorPrice', 'length',
                    'width', 'height', 'spline', 'areaPrice', 'roofStyle', 'roofStylePrice',
                    'thickness', 'thicknessPrice', 'frontWindOne', 'frontWindOnePrice',
                    'frontWindTwo', 'frontWindTwoPrice', 'frontWindThree', 'frontWindThreePrice',
                    'frontDoor', 'frontDoorPrice', 'backWindOne', 'backWindOnePrice', 'backWindTwo',
                    'backWindTwoPrice', 'backWindThree', 'backWindThreePrice', 'backDoor',
                    'backDoorPrice', 'leftWindOne', 'leftWindOnePrice', 'leftWindTwo',
                    'leftWindTwoPrice', 'leftWindThree', 'leftWindThreePrice', 'leftDoor',
                    'leftDoorPrice', 'rightWindOne', 'rightWindOnePrice', 'rightWindTwo',
                    'rightWindTwoPrice', 'rightWindThree', 'rightWindThreePrice', 'rightDoor',
                    'rightDoorPrice', 'tprice', 'd_image_1', 'd_image_2', 'd_image_3', 'd_image_4', 'status']
            res_dic = {keys[i]: result[0][i] for i in range(0, len(keys), 1)}

            return jsonify(res_dic), 200


        except Exception as e:
            return {"Result":f"Internal system error : {e}"}, 400



    def ordercamp(self,insertion_data):
        try:
            email = insertion_data["email"]
            cursor = self.conn.cursor()
            status = self.get_exisiting_camp_status(email,"pending")
            if(status == "pending"):
                self.updatecampdata(insertion_data)
            else:

                return self.insertnewcamp(insertion_data)

        except Exception as e:
            return {"Result":f"Internal system error : {e}"}, 400


    def get_exisiting_camp_status(self,email,status):
        try:
            cursor = self.conn.cursor()
            query = f"select status from camp where email ='{email}' and status = '{status}'"
            cursor.execute(query)
            result = cursor.fetchall()
            for row in result:
                if(row[0] == "pending"):

                    return "pending"

                else:

                    return None

        except Exception as e:
            print(f'Error  : {e}')

    def insertnewcamp(self,insertion_data):
        try:
            cursor = self.conn.cursor()
            if insertion_data['status'] == 'pending':
                query = f"insert into camp (name, email, phone, type, message, sidingColor, sidingColorPrice, stripeColor, stripeColorPrice, " \
                        f"lenght, width, height, spline, areaPrice, roofStyle, roofStylePrice, thickness, thicknessPrice, frontWindOne, frontWindOnePrice," \
                        f" frontWindTwo, frontWindTwoPrice, frontWindThree, frontWindThreePrice, frontDoor, frontDoorPrice, backWindOne, backWindOnePrice, backWindTwo," \
                        f" backWindTwoPrice, backWindThree, backWindThreePrice, backDoor, backDoorPrice, leftWindOne, leftWindOnePrice, leftWindTwo, leftWindTwoPrice," \
                        f" leftWindThree, leftWindThreePrice, leftDoor, leftDoorPrice, rightWindOne, rightWindOnePrice, rightWindTwo, rightWindTwoPrice, rightWindThree," \
                        f" rightWindThreePrice, rightDoor, rightDoorPrice, tprice, d_image_1, d_image_2, d_image_3, d_image_4, status) VALUES " \
                        f"('{insertion_data['name']}', '{insertion_data['email']}', {insertion_data['phone']}, '{insertion_data['type']}'," \
                        f" '{insertion_data['message']}', '{insertion_data['sidingColor']}', " \
                        f" {insertion_data['sidingColorPrice']}, '{insertion_data['stripeColor']}', " \
                        f" {insertion_data['stripeColorPrice']}, {insertion_data['length']}, {insertion_data['width']}, " \
                        f"{insertion_data['height']}, {insertion_data['spline']}, {insertion_data['areaPrice']}, '{insertion_data['roofStyle']}', '{insertion_data['roofStylePrice']}'," \
                        f" '{insertion_data['thickness']}', '{insertion_data['thicknessPrice']}', '{insertion_data['frontWindOne']}', '{insertion_data['frontWindOnePrice']}'," \
                        f" '{insertion_data['frontWindTwo']}', '{insertion_data['frontWindTwoPrice']}', '{insertion_data['frontWindThree']}', '{insertion_data['frontWindThreePrice']}'," \
                        f" '{insertion_data['frontDoor']}', '{insertion_data['frontDoorPrice']}', '{insertion_data['backWindOne']}', '{insertion_data['backWindOnePrice']}'," \
                        f" '{insertion_data['backWindTwo']}', '{insertion_data['backWindTwoPrice']}', '{insertion_data['backWindThree']}', '{insertion_data['backWindThreePrice']}', " \
                        f"'{insertion_data['backDoor']}', '{insertion_data['backDoorPrice']}', '{insertion_data['leftWindOne']}', '{insertion_data['leftWindOnePrice']}'," \
                        f" '{insertion_data['leftWindTwo']}', '{insertion_data['leftWindTwoPrice']}', '{insertion_data['leftWindThree']}', '{insertion_data['leftWindThreePrice']}', " \
                        f"'{insertion_data['leftDoor']}', '{insertion_data['leftDoorPrice']}', '{insertion_data['rightWindOne']}', '{insertion_data['rightWindOnePrice']}', " \
                        f"'{insertion_data['rightWindTwo']}', '{insertion_data['rightWindTwoPrice']}', '{insertion_data['rightWindThree']}', '{insertion_data['rightWindThreePrice']}', " \
                        f"'{insertion_data['rightDoor']}', '{insertion_data['rightDoorPrice']}', '{insertion_data['tprice']}', '{insertion_data['d_image_1']}', '{insertion_data['d_image_2']}'," \
                        f" '{insertion_data['d_image_3']}', '{insertion_data['d_image_4']}', '{insertion_data['status']}')"

            elif insertion_data['status'] == 'ordered':
                query = f"insert into camp (name, email, phone, type, message, sidingColor, sidingColorPrice, stripeColor, stripeColorPrice, " \
                        f"lenght, width, height, spline, areaPrice, roofStyle, roofStylePrice, thickness, thicknessPrice, frontWindOne, frontWindOnePrice," \
                        f" frontWindTwo, frontWindTwoPrice, frontWindThree, frontWindThreePrice, frontDoor, frontDoorPrice, backWindOne, backWindOnePrice, backWindTwo," \
                        f" backWindTwoPrice, backWindThree, backWindThreePrice, backDoor, backDoorPrice, leftWindOne, leftWindOnePrice, leftWindTwo, leftWindTwoPrice," \
                        f" leftWindThree, leftWindThreePrice, leftDoor, leftDoorPrice, rightWindOne, rightWindOnePrice, rightWindTwo, rightWindTwoPrice, rightWindThree," \
                        f" rightWindThreePrice, rightDoor, rightDoorPrice, tprice, d_image_1, d_image_2, d_image_3, d_image_4, status, ordered_Date) VALUES " \
                        f"('{insertion_data['name']}', '{insertion_data['email']}', {insertion_data['phone']}, '{insertion_data['type']}'," \
                        f" '{insertion_data['message']}', '{insertion_data['sidingColor']}', " \
                        f" {insertion_data['sidingColorPrice']}, '{insertion_data['stripeColor']}', " \
                        f" {insertion_data['stripeColorPrice']}, {insertion_data['length']}, {insertion_data['width']}, " \
                        f"{insertion_data['height']}, {insertion_data['spline']}, {insertion_data['areaPrice']}, '{insertion_data['roofStyle']}', '{insertion_data['roofStylePrice']}'," \
                        f" '{insertion_data['thickness']}', '{insertion_data['thicknessPrice']}', '{insertion_data['frontWindOne']}', '{insertion_data['frontWindOnePrice']}'," \
                        f" '{insertion_data['frontWindTwo']}', '{insertion_data['frontWindTwoPrice']}', '{insertion_data['frontWindThree']}', '{insertion_data['frontWindThreePrice']}'," \
                        f" '{insertion_data['frontDoor']}', '{insertion_data['frontDoorPrice']}', '{insertion_data['backWindOne']}', '{insertion_data['backWindOnePrice']}'," \
                        f" '{insertion_data['backWindTwo']}', '{insertion_data['backWindTwoPrice']}', '{insertion_data['backWindThree']}', '{insertion_data['backWindThreePrice']}', " \
                        f"'{insertion_data['backDoor']}', '{insertion_data['backDoorPrice']}', '{insertion_data['leftWindOne']}', '{insertion_data['leftWindOnePrice']}'," \
                        f" '{insertion_data['leftWindTwo']}', '{insertion_data['leftWindTwoPrice']}', '{insertion_data['leftWindThree']}', '{insertion_data['leftWindThreePrice']}', " \
                        f"'{insertion_data['leftDoor']}', '{insertion_data['leftDoorPrice']}', '{insertion_data['rightWindOne']}', '{insertion_data['rightWindOnePrice']}', " \
                        f"'{insertion_data['rightWindTwo']}', '{insertion_data['rightWindTwoPrice']}', '{insertion_data['rightWindThree']}', '{insertion_data['rightWindThreePrice']}', " \
                        f"'{insertion_data['rightDoor']}', '{insertion_data['rightDoorPrice']}', '{insertion_data['tprice']}', '{insertion_data['d_image_1']}', '{insertion_data['d_image_2']}'," \
                        f" '{insertion_data['d_image_3']}', '{insertion_data['d_image_4']}', '{insertion_data['status']}', NOW())"

            cursor.execute(query)
            self.conn.commit()
            return jsonify("Data Entered Successfully"), 200

        except Exception as e:

            return f"Internal system error : {e}", 400

    def updatecampdata(self,insertion_data):
        try:
            self.delete_pending_row(insertion_data["email"])
            test = self.insertnewcamp(insertion_data)

            return {"Result":"Data updated successfully"}, 200

        except Exception as e:
            return f'Error: {e}', 400

    def delete_pending_row(self,email):
        try:
            cursor = self.conn.cursor()
            query = f"Delete from camp where email ='{email}' and status= 'pending'"
            cursor.execute(query)
            self.conn.commit()
        except Exception as e:

            print(f'Error in updating {e}')

    def insert_against_email(self, insertion_data):
        try:
            current_camp_status = self.get_exisiting_camp_status(insertion_data["email"],"pending")
            if(current_camp_status == "pending"):
                return self.updatecampdata(insertion_data)
            else:

                return self.insertnewcamp(insertion_data)

        except Exception as e:

            return f"Internal system error : {e}", 400

    def getordereddata(self, res):
        try:
            cursor = self.conn.cursor()

            if(res != None):
                if (res["email"] != None and res["started_at"] != None and res["ended_at"] != None):
                    query = f"SELECT * from camp where status = 'ordered' and email = '{res['email']}'and ordered_Date between '{res['started_at']}' and '{res['ended_at']}'"
                if (res["email"] != None):
                    if (res["started_at"] == None and res["ended_at"] != None):
                        query = f"SELECT * from camp where email = '{res['email']}' and status = 'ordered' and ordered_Date <= '{res['ended_at']}'"
                    elif (res["started_at"] != None and res["ended_at"] == None):
                        query = f"SELECT * from camp where email = '{res['email']}' and status = 'ordered' and ordered_Date >= '{res['started_at']}'"
                    elif (res["started_at"] == None and res["ended_at"] == None):
                        query = f"SELECT * from camp where email = '{res['email']}' and status = 'ordered'"
                if (res["started_at"] != None):
                    if (res["email"] == None and res["ended_at"] != None):
                        query = f"SELECT * from camp where status = 'ordered' and ordered_Date between '{res['started_at']}' and '{res['ended_at']}'"
                    elif (res["email"] == None and res["ended_at"] == None):
                        query = f"SELECT * from camp where  status = 'ordered' and ordered_Date >= '{res['started_at']}'"
                if (res["ended_at"] != None):
                    if (res["email"] == None and res["started_at"] != None):
                        query = f"SELECT * from camp where status = 'ordered' and ordered_Date between '{res['started_at']}' and '{res['ended_at']}'"
                    elif (res["email"] == None and res["started_at"] == None):
                        query = f"SELECT * from camp where status = 'ordered' and ordered_Date <= '{res['ended_at']}'"
                if (res["email"] == None and res["started_at"] == None and res["ended_at"] == None):
                    query = f"SELECT * from camp where status = 'ordered'"

            else:
                query = f"SELECT * from camp where status = 'ordered'"
            cursor.execute(query)

            result = cursor.fetchall()

            if cursor.rowcount == 0:
                return {"Result":"Result not found"}, 400

            columns = cursor.description

            columns_names = []

            for single_column in columns:
                name = single_column[0]
                columns_names.append(name)

            result.insert(0,tuple(columns_names))

            return jsonify(result), 200

        except Exception as e:

            return {"Result":f"Internal system error : {e}"}, 400

    def fullfill_camp(self, res):
        try:
            cursor = self.conn.cursor()
            query = f"SELECT * from camp where id = '{res['id']}'"
            cursor.execute(query)
            result = cursor.fetchall()
            if cursor.rowcount == 0:
                return {"Result":"Result not found"}, 400
            if result[0][-4] == 'ordered':
                query = f"UPDATE camp SET status = 'fulfilled', fulfilled_Date = NOW() where id = '{res['id']}'"
                cursor.execute(query)
                self.conn.commit()
                return {"Result":"Your order is successfully fulfilled."}, 200
            elif result[0][-4] == 'pending':
                return {"Result":"This order is on pending status."}, 400
            elif result[0][-4] == 'fulfilled':
                return {"Result":"This order is already fulfilled."}, 400
            elif result[0][-4] == 'cancelled':
                return {"Result":"This order has been cancelled."}, 400

        except Exception as e:

            {"Result":f"Internal system error : {e}"}, 400

    def getfulfilleddata(self, res):
        try:
            cursor = self.conn.cursor()
            if (res != None):
                if (res["email"] != None and res["started_at"] != None and res["ended_at"] != None):
                    query = f"SELECT * from camp where status = 'fulfilled' and email = '{res['email']}'and fulfilled_Date between '{res['started_at']}' and '{res['ended_at']}'"
                if (res["email"] != None):
                    if (res["started_at"] == None and res["ended_at"] != None):
                        query = f"SELECT * from camp where email = '{res['email']}' and status = 'fulfilled' and fulfilled_Date <= '{res['ended_at']}'"
                    elif (res["started_at"] != None and res["ended_at"] == None):
                        query = f"SELECT * from camp where email = '{res['email']}' and status = 'fulfilled' and fulfilled_Date >= '{res['started_at']}'"
                    elif (res["started_at"] == None and res["ended_at"] == None):
                        query = f"SELECT * from camp where email = '{res['email']}' and status = 'fulfilled'"
                if (res["started_at"] != None):
                    if (res["email"] == None and res["ended_at"] != None):
                        query = f"SELECT * from camp where status = 'fulfilled' and fulfilled_Date between '{res['started_at']}' and '{res['ended_at']}'"
                    elif (res["email"] == None and res["ended_at"] == None):
                        query = f"SELECT * from camp where  status = 'fulfilled' and fulfilled_Date >= '{res['started_at']}'"
                if (res["ended_at"] != None):
                    if (res["email"] == None and res["started_at"] != None):
                        query = f"SELECT * from camp where status = 'fulfilled' and fulfilled_Date between '{res['started_at']}' and '{res['ended_at']}'"
                    elif (res["email"] == None and res["started_at"] == None):
                        query = f"SELECT * from camp where status = 'fulfilled' and fulfilled_Date <= '{res['ended_at']}'"
                if (res["email"] == None and res["started_at"] == None and res["ended_at"] == None):
                    query = f"SELECT * from camp where status = 'fulfilled'"
            else:
                query = f"SELECT * from camp where status = 'fulfilled'"

            cursor.execute(query)

            result = cursor.fetchall()
            if cursor.rowcount == 0:
               return {"Result":"Result not found"}, 400
            columns = cursor.description

            columns_names = []

            for single_column in columns:
                name = single_column[0]
                columns_names.append(name)

            result.insert(0,tuple(columns_names))

            return jsonify(result), 200

        except Exception as e:

            return {"Result":f"Internal system error : {e}"}, 400

    def cancelcamp_order(self, res):
        try:
            cursor = self.conn.cursor()

            query = f"SELECT * from camp where id = '{res['id']}'"
            cursor.execute(query)
            result = cursor.fetchall()
            if cursor.rowcount == 0:
                return {"Result":"Result not found"}, 400
            if result[0][-4] == 'ordered':

                query = f"UPDATE camp SET status = 'cancelled',cancelled_Date = NOW() where id = '{res['id']}'"
                cursor.execute(query)
                self.conn.commit()

                return {"Result":"Your order successfully cancelled."}, 200
            elif result[0][-4] == 'pending':
                return {"Result":"Your camp is on pending status plz confirm its order."}, 400
            elif result[0][-4] == 'fulfilled':
                return {"Result":"Your order is already fulfilled."}, 400
            elif result[0][-4] == 'cancelled':
                return {"Result":"Your order is already cancelled."}, 400

        except Exception as e:

            return {"Result":f"Internal system error : {e}"}, 400


    def get_cancelledcamps(self, res):
        try:
            cursor = self.conn.cursor()
            if (res != None):
                if (res["email"] != None and res["started_at"] != None and res["ended_at"] != None):
                    query = f"SELECT * from camp where status = 'cancelled' and email = '{res['email']}'and cancelled_Date between '{res['started_at']}' and '{res['ended_at']}'"
                if (res["email"] != None):
                    if (res["started_at"] == None and res["ended_at"] != None):
                        query = f"SELECT * from camp where email = '{res['email']}' and status = 'cancelled' and cancelled_Date <= '{res['ended_at']}'"
                    elif (res["started_at"] != None and res["ended_at"] == None):
                        query = f"SELECT * from camp where email = '{res['email']}' and status = 'cancelled' and cancelled_Date >= '{res['started_at']}'"
                    elif (res["started_at"] == None and res["ended_at"] == None):
                        query = f"SELECT * from camp where email = '{res['email']}' and status = 'cancelled'"
                if (res["started_at"] != None):
                    if (res["email"] == None and res["ended_at"] != None):
                        query = f"SELECT * from camp where status = 'cancelled' and cancelled_Date between '{res['started_at']}' and '{res['ended_at']}'"
                    elif (res["email"] == None and res["ended_at"] == None):
                        query = f"SELECT * from camp where  status = 'cancelled' and cancelled_Date >= '{res['started_at']}'"
                if (res["ended_at"] != None):
                    if (res["email"] == None and res["started_at"] != None):
                        query = f"SELECT * from camp where status = 'cancelled' and cancelled_Date between '{res['started_at']}' and '{res['ended_at']}'"
                    elif (res["email"] == None and res["started_at"] == None):
                        query = f"SELECT * from camp where status = 'cancelled' and cancelled_Date <= '{res['ended_at']}'"
                if (res["email"] == None and res["started_at"] == None and res["ended_at"] == None):
                    query = f"SELECT * from camp where status = 'cancelled'"
            else:
                query = f"SELECT * from camp where status = 'cancelled'"

            cursor.execute(query)

            result = cursor.fetchall()
            if cursor.rowcount == 0:
                return {"Result": "Result not found"}, 400
            columns = cursor.description

            columns_names = []

            for single_column in columns:
                name = single_column[0]
                columns_names.append(name)

            result.insert(0, tuple(columns_names))

            return jsonify(result), 200

        except Exception as e:

            return {"Result": f"Internal system error : {e}"}, 400






# if __name__ == '__main__':
#     insertion = CampHandler()
#
#
#
#
#     data = {
#         "email":"test3@gmail.com",
#         "length":100,
#         "width":100,
#         "height":50,
#         "spline":20,
#         "status":"pending",
#         "tprice":250
#
#     }
#
#     schema_payload = Insertcampdata()
#     try:
#
#         res = schema_payload.load(data)
#
#     except ValidationError as e:
#         print(f"Error: {e}")
#
#
#      insertion.insert_against_email(res)
#      insertion.getcampdata("test3@gmail.com")
