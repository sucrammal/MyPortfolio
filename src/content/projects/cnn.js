import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const cnnProject = {
	title: "Convolutional Neural Network (CNN) for Skin Cancer Detection",
	shortDescription: "Distinguish benign and harmful skin lesions",
	tags: [
		"python",
		"ML",
		"CNN",
		"CV",
		"HPO",
		"Flask",
		"TF",
		"Keras",
		"numpy",
		"pandas",
	],
	image: "https://stanford.edu/~shervine/teaching/cs-230/illustrations/convolution-layer-a.png?1c517e00cb8d709baf32fc3d39ebae67",
	labels: ["Data Science"],
	fullContent: (
		<div>
			<section>
				<img
					src="https://sds-platform-private.s3-us-east-2.amazonaws.com/uploads/74_blog_image_1.png"
					alt="DNN"
					className="w-6/12"
				/>
				<h3 className="font-semibold mt-4">Premise</h3>
				<ul className="list-disc ml-6">
					<li>
						First ever ML project: Wanted to learn the basics of
						Machine Learning and CV.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Outcomes</h3>
				<ul className="list-disc ml-6">
					<li>
						Implemented a Convolutional Neural Network that
						classifed skin lesions at 55% accuracy, ROC AUC of 80%.{" "}
					</li>
					<li>
						Improved the model through Hyperparameter Optimization
						(HPO), pushing accuracy to 70%.{" "}
					</li>
					<li>
						Fine-tuned MobileNet architecture to make a transfer
						learning model.{" "}
					</li>
					<li>
						Wrote code to deploy the model on a simple webapp to
						allow upload and diagnosis with Flask.{" "}
					</li>
				</ul>
				<h3 className="font-semibold mt-4">Technologies Used</h3>
				<div className="mt-3 flex flex-wrap gap-1.5">
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Python
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						TensorFlow
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Keras
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						HPOpt
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						Flask
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						HTML/CSS
					</span>
					<span className="px-2 py-1 text-s rounded-full bg-gray-100 text-gray-600">
						JS
					</span>
				</div>
			</section>
			<section>
				<h2 className="font-bold mt-4 text-xl">CNN breakdown:</h2>
				<SyntaxHighlighter
					language="python"
					style={solarizedlight} // You can change this to any Prism.js theme
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
					}}
				>
					{`def CNNClassifier(epochs=1, batch_size=10, layers=5, dropout=0.5, activation='relu'):
  def set_params():
    i = 1
  def create_model():
    model = Sequential()
    model.add(Reshape((IMG_WIDTH, IMG_HEIGHT, 3)))

    for i in range(layers):
      model.add(Conv2D(64, (3, 3), padding='same'))     #Processes it 64 times. 3x3 Kernels
      model.add(Activation(activation))

    model.add(Conv2D(64, (3, 3)))
    model.add(Activation(activation))
    model.add(MaxPooling2D(pool_size=(2, 2)))
    model.add(Dropout(dropout / 2.0))

    model.add(Conv2D(128, (3, 3), padding='same'))
    model.add(Activation(activation))
    model.add(Conv2D(128, (3, 3)))
    model.add(Activation(activation))
    model.add(MaxPooling2D(pool_size=(2, 2)))
    model.add(Dropout(dropout / 2.0))

    model.add(Flatten())
    model.add(Dense(512))
    model.add(Activation(activation))
    model.add(Dropout(dropout))
    model.add(Dense(7))
    model.add(Activation('softmax'))

    # initiate RMSprop optimizer
    opt = keras.optimizers.RMSprop(lr=0.0001, decay=1e-6)

    # Train the model using RMSprop
    model.compile(loss='categorical_crossentropy',
                  optimizer=opt,
                  metrics=[tf.keras.metrics.AUC()])
    return model
  return KerasClassifier(build_fn=create_model, epochs=epochs, batch_size=batch_size, verbose=1)
  
  gs = GridSearch(model=gridSearchCNN(),param_grid=param_grid,parallelize=False)
  grid_result = grid.fit(X_train, y_train_onehot)

  # Print the best parameters and score
  print("Best Parameters: ", grid_result.best_params_)
  print("Best Accuracy: ", grid_result.best_score_)

  # Train the best model
  best_model = grid_result.best_estimator_.model
  best_model.fit(X_train, y_train_onehot, validation_data=(X_test, y_test_onehot), epochs=grid_result.best_params_['epochs'], batch_size=grid_result.best_params_['batch_size'], verbose=1)

  # Evaluate the best model
  y_pred = best_model.predict(X_test)
  y_pred_classes = np.argmax(y_pred, axis=1)
  y_true_classes = np.argmax(y_test_onehot, axis=1)
`}
				</SyntaxHighlighter>
				<br></br>
				<ul className="list-disc ml-6">
					<li>
						Learned about activation functions, and the different
						types of layers: Convolutional Layers, Pooling Layers,
						and Fully Connected Layers.
					</li>
					<li>
						Used RMSprop to optimize training, and the simple grid
						search algorithm to perform HPO.
					</li>
				</ul>
				<br></br>
				<img
					src="./images//cnn/cnn_cm1.png"
					alt="Confusion Matrix"
					className="w-6/12"
				/>
				<ul className="list-disc ml-6">
					<li>
						Labels are different diagnoses, benign and dangerous.
					</li>
				</ul>
			</section>
			<section>
				<h2 className="font-bold mt-4 text-xl">Deploying the CNN: </h2>
				<br></br>
				<SyntaxHighlighter
					language="python"
					style={solarizedlight} // You can change this to any Prism.js theme
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
					}}
				>
					{`# API route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    try:
        # Read and preprocess image file
        image = Image.open(io.BytesIO(file.read()))
        processed_image = preprocess_image(image)
        # Make a prediction
        predictions = loaded_model.predict(processed_image)
        predicted_class = np.argmax(predictions, axis=1)[0]
        class_names = ['akiec', 'bcc', 'bkl', 'df', 'mel', 'nv', 'vasc']
        result = class_names[predicted_class]
        return jsonify({'prediction': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500`}
				</SyntaxHighlighter>
				<br></br>
				<ul className="list-disc ml-6">
					<li>
						Simple API route to read and preprocess the uploaded
						image, and return the model's prediction.{" "}
					</li>
				</ul>
			</section>
			<section>
				<h2 className="font-bold mt-4 text-xl">
					Transfer Learning Model:{" "}
				</h2>
				<SyntaxHighlighter
					language="python"
					style={solarizedlight} // You can change this to any Prism.js theme
					customStyle={{
						padding: "1rem",
						borderRadius: "0.5rem",
						background: "#f5f2f0",
						fontSize: "0.8rem",
					}}
				>
					{`def transfer_learning_model():
  mobilenet_model = MobileNet(input_shape=(IMG_HEIGHT,IMG_WIDTH,3), include_top=False, pooling="max")

  transfer_model = Sequential()
  transfer_model.add(mobilenet_model)     # Input the mobilenet transfer model as a "layer"
  transfer_model.add(Dropout(0.1))
  transfer_model.add(BatchNormalization())
  transfer_model.add(Dense(256, activation="relu"))
  transfer_model.add(Dropout(0.1))
  transfer_model.add(BatchNormalization())
  transfer_model.add(Dense(7, activation="softmax"))

  # initiate RMSprop optimizer
  opt = keras.optimizers.RMSprop(lr=0.0001, decay=1e-6)

  # Train the model using RMSprop again
  transfer_model.compile(loss='categorical_crossentropy',
                optimizer=opt,
                metrics=[tf.keras.metrics.AUC()])

  return transfer_model`}
				</SyntaxHighlighter>
			</section>
			<h2 className="font-bold mt-4 text-xl">
				Full code:{" "}
				<a
					href="https://colab.research.google.com/drive/1YrXuevHji5A9_ShettiXvMJJZbrOwEPZ?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					className="text-teal-600 hover:text-teal-700 underline decoration-teal-300 hover:decoration-teal-500 transition-colors"
				>
					Link
				</a>
			</h2>
		</div>
	),
};

export default cnnProject;
