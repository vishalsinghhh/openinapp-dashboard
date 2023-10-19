import React, { useState } from "react";
import add from "../../images/add.svg";
import Modal from "../Modal";
import mail from "../../images/mail.svg";
import phone1 from "../../images/whatsapp.svg";
import instagram1 from "../../images/insta.svg";
import youtube1 from "../../images/youtube.svg";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [isBasic, setIsBasic] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="profileMain">
      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="newPro">Add New Profile</div>
          <div className="underline"></div>
          <div className="options">
            <div>
              <div>Basic</div>
              {isBasic ? (
                <div className="underline1"></div>
              ) : (
                <div className="underline2"></div>
              )}
            </div>
            <div>
              <div>Contact</div>
              {isBasic ? (
                <div className="underline2"></div>
              ) : (
                <div className="underline1"></div>
              )}
            </div>
          </div>
          {isBasic && (
            <div>
              <div>
                <div className="userInput">Enter Name*</div>
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Eg. John Doe"
                  />
                </div>
              </div>
              <div>
                <div className="userInput">Enter Email*</div>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Eg. John@xyz.com"
                  />
                </div>
              </div>
              <div>
                <div className="userInput">Enter Phone*</div>
                <div>
                  <input
                    type="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    placeholder="Eg. 9123456789"
                  />
                </div>
              </div>
            </div>
          )}
          {!isBasic && (
            <div>
              <div>
                <div className="userInput">
                  Instagram Link <span className="Optional">(Optional)</span>
                </div>
                <div>
                  <input
                    type="text"
                    value={instagram}
                    onChange={(e) => {
                      setInstagram(e.target.value);
                    }}
                    placeholder="Eg. instagram.com/username"
                  />
                </div>
              </div>
              <div>
                <div className="userInput">
                  Youtube Link <span className="Optional">(Optional)</span>
                </div>
                <div>
                  <input
                    type="text"
                    value={youtube}
                    onChange={(e) => {
                      setYoutube(e.target.value);
                    }}
                    placeholder="Eg. youtube.com/username"
                  />
                </div>
              </div>
            </div>
          )}
          <div className="gap2"></div>
          <div className="underline"></div>
          <div>
            {isBasic && (
              <button
                onClick={() => {
                  setIsBasic(false);
                }}
                className="nextBTN"
              >
                Next
              </button>
            )}
            {!isBasic && (
              <div>
                <button
                  onClick={() => {
                    setIsBasic(true);
                  }}
                  className="nextBTN1"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    setUserData([name, email, phone, instagram, youtube]);
                    closeModal(false);
                  }}
                  className="nextBTN"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </Modal>
      </div>
      {userData.length === 0 && (
        <div>
          <img
            src={add}
            alt="img"
            onClick={openModal}
            className="modalPointer"
          />
          <div className="addProfile">Add Profile</div>
        </div>
      )}
      {userData.length !== 0 && (
        <div>
          <div className="mainName">{userData[0]}</div>
          <div className="flex1">
            <div className="flexMain1">
              <img src={phone1} alt="mail" className="imageDetail" />
              {userData[2]}
            </div>
            <div className="flexMain1">
              <img src={instagram1} alt="mail" className="imageDetail" />
              {userData[3]}
            </div>
          </div>
          <div className="flex1">
            <div className="flexMain1">
              <img src={mail} alt="mail" className="imageDetail" />
              {userData[1]}
            </div>
            <div className="flexMain1">
              <img src={youtube1} alt="mail" className="imageDetail" />
              {userData[4]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
