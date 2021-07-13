from flask import Flask, jsonify, render_template, request, Response, make_response

from flask_cors import CORS, cross_origin

from payload.insertion_payload import Insertcampdata

from payload.emaildatapayload import Getcampdata

from payload.user_id_payload import getcamp

from payload.ordercamp_payload import ordercamp

from payload.orderedcamps_payload import orderedcamps

from payload.fulfillcamp_payload import fulfillcamp

from payload.cancelcamp_payload import Cancelcamp

from payload.fulfilledcamps_payload import fulfilledcamps

from payload.getlogin_payload import Logincamp

from payload.cancelledcamps_payload import cancelledcamps

from Database.camp_database_handler import CampHandler

from marshmallow import ValidationError
from flask_restful import Api

from flask_jwt_extended import (
    JWTManager, jwt_required, jwt_optional, create_access_token,
    get_jwt_identity, get_jwt_claims, get_raw_jwt
)
blacklist = set()

def configure_jwt(app):
    app.config['JWT_SECRET_KEY'] = 'super-secret'  # Change this!
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = False
    app.config['JWT_BLACKLIST_ENABLED'] = True
    app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']


# flask mail configurations

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)
api = Api(app)



configure_jwt(app)


jwt = JWTManager(app)


@jwt.user_claims_loader
def add_claims_to_access_token(identity):
	return {
        'identity': identity
    }


@jwt.token_in_blacklist_loader
def check_if_token_in_blacklist(decrypted_token):
    jti = decrypted_token['jti']
    return jti in blacklist


@app.route('/savedata', methods=["POST"])
@jwt_required
def savedataviaemail():
	schema_payload = Insertcampdata()
	schema_data = request.get_json()
	try:
		res = schema_payload.load(schema_data)
	except ValidationError as e:
		print(f"Error: {e}")
		response = jsonify(status="Error", errorReason=str(e))
		return make_response(response, 400)
	CampHandlerobj = CampHandler()
	res = CampHandlerobj.insert_against_email(res)

	return res

@app.route('/getpendingcamp', methods=['POST'])
@jwt_required
def getcampdata():
	email_payload = Getcampdata()
	json_data = request.get_json()
	try:
		res = email_payload.load(json_data)
	except ValidationError as e:
		print(f"Error: {e}")
		response = jsonify(status="Error", errorReason=str(e))
		return make_response(response, 400)
	CampHandlerobj = CampHandler()
	email = res["email"]
	result = CampHandlerobj.getcampdata(email)

	return jsonify(result)

@app.route('/getcamp', methods=['POST'])
@jwt_required
def campdata():
	id_payload = getcamp()
	json_data = request.get_json()
	try:
		res = id_payload.load(json_data)
	except ValidationError as e:
		print(f"Error: {e}")
		response = jsonify(status="Error", errorReason=str(e))
		return make_response(response, 400)
	CampHandlerobj = CampHandler()
	id = res["id"]
	result = CampHandlerobj.getcampbyid(id)

	return result


@app.route('/ordercamp', methods=['POST'])
@jwt_required
def ordercampdata():
	schema_payload = ordercamp()
	json_data = request.get_json()
	try:
		res = schema_payload.load(json_data)
	except ValidationError as e:
		print(f"Error: {e}")
		response = jsonify(status="Error", errorReason=str(e))
		return make_response(response, 400)
	CampHandlerobj = CampHandler()
	res = CampHandlerobj.insert_against_email(res)

	return res

@app.route('/getorderedcamps', methods=['POST'])
@jwt_required
def getorderedcampdata():
	schema_payload = orderedcamps()
	json_data = request.get_json()

	if(json_data != None):

		try:
			res = schema_payload.load(json_data)
		except ValidationError as e:
			print(f"Error: {e}")
			response = jsonify(status="Error", errorReason=str(e))
			return make_response(response, 400)

	else:
		res = None

	CampHandlerobj = CampHandler()

	result = CampHandlerobj.getordereddata(res)

	return result

@app.route('/fulfillcamp', methods=['POST'])
@jwt_required
def fulfilledcampdata():
	schema_payload = fulfillcamp()
	json_data = request.get_json()
	try:
		res = schema_payload.load(json_data)
	except ValidationError as e:
		print(f"Error: {e}")
		response = jsonify(status="Error", errorReason=str(e))
		return make_response(response, 400)
	CampHandlerobj = CampHandler()
	result = CampHandlerobj.fullfill_camp(res)

	return result

@app.route('/getfulfilledcamps', methods=['POST'])
@jwt_required
def getfulfilledcampdata():
	schema_payload = fulfilledcamps()
	json_data = request.get_json()
	if (json_data != None):
		try:
			res = schema_payload.load(json_data)
		except ValidationError as e:
			print(f"Error: {e}")
			response = jsonify(status="Error", errorReason=str(e))
			return make_response(response, 400)
	else:
		res = None
	CampHandlerobj = CampHandler()
	result = CampHandlerobj.getfulfilleddata(res)

	return result

@app.route('/cancelcamp', methods=['POST'])
@jwt_required
@cross_origin(origin='*')
def cancelcamporder():
	schema_payload = Cancelcamp()
	json_data = request.get_json()
	try:
		res = schema_payload.load(json_data)
	except ValidationError as e:
		print(f"Error: {e}")
		response = jsonify(status="Error", errorReason=str(e))
		return make_response(response, 400)
	CampHandlerobj = CampHandler()
	result = CampHandlerobj.cancelcamp_order(res)

	return result

@app.route('/getcancelledcamps', methods=['POST'])
@jwt_required
def get_cancelledcamps():
	schema_payload = cancelledcamps()
	json_data = request.get_json()
	if (json_data != None):
		try:
			res = schema_payload.load(json_data)
		except ValidationError as e:
			print(f"Error: {e}")
			response = jsonify(status="Error", errorReason=str(e))
			return make_response(response, 400)
	else:
		res = None
	CampHandlerobj = CampHandler()
	result = CampHandlerobj.get_cancelledcamps(res)

	return result

@app.route('/login', methods=['POST'])
def getlogin():
	schema_payload = Logincamp()
	json_data = request.get_json()
	try:
		res = schema_payload.load(json_data)
	except ValidationError as e:
		print(f"Error: {e}")
		response = jsonify(status="Error", errorReason=str(e))
		return make_response(response, 400)
	email_address = res["email"]
	password = res["password"]
	# check = UserHandler().check_user_credentials(email_address, password)
	# CampHandlerobj = CampHandler()
	jwt_token = create_access_token(email_address)
	# result = CampHandlerobj.get_cancelledcamps(res)
	ret = {'access_token': jwt_token}
	return jsonify(ret), 200


if __name__ == '__main__':
	app.run(host="localhost",debug=True, port=8080)

