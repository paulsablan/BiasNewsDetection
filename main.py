from flask import Flask, request, render_template
import openpyxl

app = Flask(__name__)

@app.route('/', methods=['GET','POST'])
def index():
	

	wb = openpyxl.load_workbook('C:/Users/Vince/Documents/sample.xlsx')
	sheet = wb.get_sheet_by_name('Sheet1')

	headline = sheet['A1'].value
	body = sheet['B1'].value
	result = 'NEUTRAL'

	return render_template('index.html',result=result, headline = headline, body = body)

if __name__ == "__main__":
	app.run(debug=True) 
 