from flask import Flask, request, render_template
import openpyxl
import os
import string
app = Flask(__name__)

@app.route('/', methods=['GET','POST'])
def index():
	
	comp_path = os.getcwd();
	new_comp_path = '/'.join(comp_path.split('\\'))
	filepath = new_comp_path + "/testing/"
	filename = 'sample.xlsx'
	path = filepath + filename
	
	print(path)
	wb = openpyxl.load_workbook(path)
	sheet = wb.get_sheet_by_name('Sheet1')

	headline = sheet['A1'].value
	body = sheet['B1'].value
	result = 'NEUTRAL'

	return render_template('index.html',result=result, headline = headline, body = body)

if __name__ == "__main__":
	app.run(debug=True) 
 