from flask import Flask, request, render_template, jsonify
import openpyxl
import os
import json
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
	
	tempfilename = request.args.get('excelfile')
	
	comp_path = os.getcwd();
	new_comp_path = '/'.join(comp_path.split('\\'))
	filepath = new_comp_path + "/testing/"
	filename = 'sample.xlsx'

	print(tempfilename)
	
	path = filepath + str(filename)
	
	print(path)
	wb = openpyxl.load_workbook(path)
	sheet = wb.get_sheet_by_name('Sheet1')

	headline = sheet['A1'].value
	body = sheet['B1'].value
	result = 'NEUTRAL'
	# return "Hello"
	return render_template('index.html', result = result, headline = headline, body = body)


	# return ()

if __name__ == "__main__":
	app.run(debug=True, host='0.0.0.0', port=80) 
 