from flask import Flask, request, render_template, jsonify
import openpyxl
import os
import json
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
	result = 'NEUTRAL'
	return render_template('index.html', result = result)

@app.route('/getdata/<string:file>', methods=['GET'])
def get_data(file):
	
	tempfilename = file
	
	path = ""
	result = 'NEUTRAL'
	headline = ""
	body = ""
	filename = 'default.xlsx'

	if tempfilename != None:
		comp_path = os.getcwd();
		new_comp_path = '/'.join(comp_path.split('\\'))
		filepath = new_comp_path + "/testing/"
		
		filename = tempfilename
		path = filepath + str(filename)
		wb = openpyxl.load_workbook(path)
		sheet = wb.get_sheet_by_name('Sheet1')
		headline = sheet['A1'].value
		body = sheet['B1'].value

	else:
		filename = filename
		

	return jsonify(result = result, headline = headline, body = body)
@app.route('/gettext/<string:newsheadline>/<string:newsbody>', methods=['GET'])
def get_text(newsheadline,newsbody):
	result = 'NEUTRAL'
	headline = newsheadline
	body = newsbody
	return jsonify(result = result, headline = headline, body = body)
if __name__ == "__main__":
	app.run(debug=True, host='0.0.0.0', port=80) 
 