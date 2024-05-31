import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import Vector from "../../assets/images/Vector.png";
import { animals } from "../../data";
import {
  Input,
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  Select,
  SelectItem,
} from "@nextui-org/react";

const NewUser = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({
    select1: "",
    select2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  });

  // function to handle changes in input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // form submit
  const sendForm = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  const navigate = useNavigate();

  function goBack() {
    navigate("/adminlogin");
  }
  return (
    <div className="border border-gray-500 p-3">
      <h1 className="text-center mb-5">Add New User</h1>
      {showForm && (
        <form onSubmit={sendForm}>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 grid-rows-3 gap-3">
            <Select
             label="Access"
             placeholder="Select an item"
             defaultSelectedKeys={["cat"]}
             className="max-w-xs bg-white text-black"
             variant="bordered"
             radius="none">
      
     
      {animals.map((animal) => (
        <SelectItem key={animal.key}>
          {animal.label}
        </SelectItem>
      ))}
    </Select>
              <div className="relative">
                <select
                  className="w-[20em] h-10 appearance-none pl-2 pr-8"
                  name="select2"
                  value={formData.select2}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <MdKeyboardArrowDown className="absolute top-3 right-2 pointer-events-none" />
              </div>
              <Input
                type="text"
                label="SurName"
                variant="bordered"
                defaultValue="Solomon"
                className="max-w-xs bg-white"
                radius="none"
              />

              <Input
                type="text"
                label="First Name"
                variant="bordered"
                defaultValue="Razak"
                className="max-w-xs bg-white"
                radius="none"
              />
              <Input
                type="email"
                label="Email"
                variant="bordered"
                defaultValue="solomonrazak99@gmail.com"
                className="max-w-xs bg-white rounded-lg"
                radius="none"
              />
              <Input
                type="text"
                label="Phone Number"
                radius="none"
                variant="bordered"
                defaultValue="000 000 000"
                className="max-w-xs bg-white"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-slate-900 text-white px-[5rem] py-1 rounded-md mt-5"
              type="submit"
              onClick={() => {
                setShowForm(false);
                setShowSummary(true);
              }}
            >
              Continue
            </button>
          </div>
        </form>
      )}
      {/* Summary */}
      {showSummary && (
        <div>
          <p className="text-center ml-[-10px] mb-5 font-medium">Summary</p>
          <div className="w-[600px] mx-auto">
            <div className="grid grid-cols-2 grid-rows-3 gap-5 w-[300px] mx-auto">
              <div>
                <p className="text-gray-500">Access</p>
                <p>{formData.select1}</p>
              </div>
              <div>
                <p className="text-gray-500">Department</p>
                <p>{formData.select2}</p>
              </div>
              <div>
                <p className="text-gray-500">First Name</p>
                <p>{formData.input3}</p>
              </div>
              <div>
                <p className="text-gray-500">Surname</p>
                <p>{formData.input4}</p>
              </div>
              <div>
                <p className="text-gray-500">Email Address</p>
                <p>{formData.input5}</p>
              </div>
              <div>
                <p className="text-gray-500">Phone Number</p>
                <p>{formData.input6}</p>
              </div>
            </div>
          </div>
          <p className="text-center text-slate-900 font-medium">
            Do you want to save this user?
          </p>
          <div className="flex justify-center gap-3 mt-3">
            <Button
              onPress={onOpen}
              className="bg-slate-900 text-white rounded-md font-medium"
            >
              Yes
            </Button>
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              isDismissable={false}
              isKeyboardDismissDisabled={true}
              className="w-[350px]"
              radius="none"
            >
              <ModalContent>
                <>
                  <ModalBody>
                    <div className="flex justify-center">
                      <div className="flex justify-center bg-green-100 w-7 h-7 p-2 rounded-full mt-10">
                        <img
                          src={Vector}
                          width={20}
                          height={20}
                          className="object-fit"
                        />
                      </div>
                    </div>

                    <p className="text-center text-slate-900 font-medium">
                      Great
                    </p>
                    <p className="text-center font-thin mt-[-10px] mb-5">
                      Service added Successfully
                    </p>
                    <button className="bg-slate-900 text-white p-1">
                      Go back To Dashboard
                    </button>
                  </ModalBody>
                </>
              </ModalContent>
            </Modal>
            <button className="bg-slate-900 text-white px-10 rounded-md">
              No
            </button>
          </div>
        </div>
      )}

      {/* Success */}
    </div>
  );
};

export default NewUser;
