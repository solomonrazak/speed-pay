import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({
    select1: "cat",
    select2: "cat",
    input3: "Solomon",
    input4: "Razak",
    input5: "jane@gmail.com",
    input6: "000 000 000",
  });

  // Function to handle changes in input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle changes in select
  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submit
  const sendForm = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowSummary(true);
  };

  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/adminpage");
  };

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
                className="max-w-xs bg-white text-black"
                variant="bordered"
                radius="none"
                selectedKeys={new Set([formData.select1])}
                onSelectionChange={(key) => handleSelectChange("select1", key.currentKey)}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key} value={animal.key}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Department"
                placeholder="Select an item"
                className="bg-white text-black"
                variant="bordered"
                radius="none"
                selectedKeys={new Set([formData.select2])}
                onSelectionChange={(key) => handleSelectChange("select2", key.currentKey)}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key} value={animal.key}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
              <Input
                type="text"
                label="SurName"
                variant="bordered"
                defaultValue={formData.input3}
                value={formData.input3}
                name="input3"
                onChange={handleInputChange}
                className="bg-white"
                radius="none"
              />
              <Input
                type="text"
                label="First Name"
                variant="bordered"
                defaultValue={formData.input4}
                value={formData.input4}
                name="input4"
                onChange={handleInputChange}
                className="bg-white"
                radius="none"
              />
              <Input
                type="email"
                label="Email"
                variant="bordered"
                defaultValue={formData.input5}
                value={formData.input5}
                name="input5"
                onChange={handleInputChange}
                className="bg-white rounded-lg"
                radius="none"
              />
              <Input
                type="text"
                label="Phone Number"
                variant="bordered"
                defaultValue={formData.input6}
                value={formData.input6}
                name="input6"
                onChange={handleInputChange}
                className="w-[300px] bg-white"
                radius="none"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-slate-900 text-white px-[5rem] py-1 rounded-md mt-5"
              type="submit"
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
                <p>{formData.input4}</p>
              </div>
              <div>
                <p className="text-gray-500">Surname</p>
                <p>{formData.input3}</p>
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
                    <button className="bg-slate-900 text-white p-1" onClick={goToDashboard}>
                      Go back To Dashboard
                    </button>
                  </ModalBody>
                </>
              </ModalContent>
            </Modal>
            <button
              className="bg-slate-900 text-white px-10 rounded-md"
              onClick={() => {
                setShowSummary(false);
                setShowForm(true);
              }}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewUser;

