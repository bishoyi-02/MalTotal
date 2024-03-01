from distutils.log import debug
from fileinput import filename
from flask import *
import tensorflow as tf
# from tf.keras.preprocessing import image
from keras.models import load_model
import numpy as np
from math import sqrt, ceil
import cv2
import os
import PIL
from PIL import Image
import PIL
app = Flask(__name__)

@app.route('/')
def main():
	return render_template("terminal.html")
# model = load_model('model.h5')
@app.route('/success', methods = ['POST'])
def success():
	if request.method == 'POST':
		f = request.files['file']
		f.save(f.filename)
		path = "./"+ f"{f.filename}"
		with open(path, 'rb') as binary_file:
			data = binary_file.read()
		data_len = len(data)
		d = np.frombuffer(data, dtype=np.uint8)
		sqrt_len = int(ceil(sqrt(data_len)))
		new_len = sqrt_len*sqrt_len
		pad_len = new_len - data_len
		padded_d = np.hstack((d, np.zeros(pad_len, np.uint8)))
		im = np.reshape(padded_d, (sqrt_len, sqrt_len))
		save_path = './output.png'
		try:
			cv2.imwrite(save_path, im)
		except:
			print("An exception occurred")
		cv2.waitKey(0)
		cv2.destroyAllWindows()
		test_image = tf.keras.utils.load_img('./output.png', target_size = (64, 64))
		test_image =  tf.keras.utils.img_to_array(test_image)
		test_image = np.expand_dims(test_image, axis = 0)
		print("debug")
		model =load_model('./model.h5')
		result = model.predict(test_image)
		prediction=''
		if(result[0][0]==0.0):
			prediction='AgentTesla'
		if(result[0][0]==1.0):
			prediction='Loki'
		if(result[0][0]==2.0):
			prediction='SmokerLoader'
		if(result[0][0]==3.0):
			prediction='Socelars'
		print("Result :: ",result[0][0])
		print("Prediction : ",prediction)
	# return redirect(url_for('success'))
	# return "Goods"
		return render_template("output.html", name = prediction)
	return render_template("terminal.html")
	
if __name__ == '__main__':
	app.jinja_env.auto_reload = True
	use_reloader = True
	# app.debug = True
	app.config['TEMPLATES_AUTO_RELOAD'] = True
	app.run(port=3002,host='0.0.0.0')
