import face_recognition
import os
import cv2
import pickle
from PIL import Image, ImageTk
db_dir = './db'
if not os.path.exists(db_dir):
            os.mkdir(db_dir)

def add(img,name):
    embeddings = face_recognition.face_encodings(img)[0]
    file = open(os.path.join(db_dir, '{}.pickle'.format(name)), 'wb')
    pickle.dump(embeddings, file)


def recognize(img, db_path):
    # it is assumed there will be at most 1 match in the db

    embeddings_unknown = face_recognition.face_encodings(img)
    if len(embeddings_unknown) == 0:
        return 'no_persons_found'
    else:
        embeddings_unknown = embeddings_unknown[0]

    db_dir = sorted(os.listdir(db_path))

    match = False
    j = 0
    while not match and j < len(db_dir):
        path_ = os.path.join(db_path, db_dir[j])

        file = open(path_, 'rb')
        embeddings = pickle.load(file)

        match = face_recognition.compare_faces(
            [embeddings], embeddings_unknown)[0]
        j += 1

    if match:
        print("True")
    else:
         print("false")


if __name__ == "__main__":
        print("hello")
        # cap = cv2.VideoCapture(0)
        # ret, frame = cap.read()
        capture = cv2.imread("Noor.jpg")
        # name=input("Enter the name") # when entering data
        # add(capture,name) # when entering data
        
        recognize(capture,"./db") # when recognition
        

