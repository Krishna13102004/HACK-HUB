import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator # type: ignore
from tensorflow.keras.models import Sequential # type: ignore
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout # type: ignore

# Data preprocessing
datagen = ImageDataGenerator(rescale=1./255)
train_data = datagen.flow_from_directory('D:/HackHustle/archive/lung_colon_image_set', target_size=(128, 128), batch_size=32, class_mode='binary')

# Model definition
model = Sequential([
    Conv2D(32, (3,3), activation='relu', input_shape=(128, 128, 3)),
    MaxPooling2D(2,2),
    Flatten(),
    Dense(128, activation='relu'),
    Dropout(0.5),
    Dense(1, activation='sigmoid')
])

# Compile and train
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.fit(train_data, epochs=10)

# Save the model in TensorFlow.js format
tf.saved_model.save(model, "my_model.h5")
