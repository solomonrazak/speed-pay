// import React, { useState } from "react";
// import Vector from "../../assets/images/Vector.png";
// import { animals } from "../../data";

// import {
//   Modal,
//   ModalContent,
//   ModalBody,
//   Button,
//   useDisclosure,
//   Select,
//   SelectItem,
// } from "@nextui-org/react";

// const NewService = () => {
//   const [showSummary, setShowSummary] = useState(false);
//   const [showForm, setShowForm] = useState(true);
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   return (
//     <div className="border border-gray-500 p-3">
//       <h1 className="text-center mb-5">Add New User</h1>
//       <p className="text-[11px] text-center mt-[-15px] mb-4">
//         Kindly Enter or uplaod Details
//       </p>
//       {showForm && (
//         <form>
//           <div className="flex justify-center">
//             <div className="grid grid-cols-2 grid-rows-2 gap-3">
//               <Select
//                 label="Department"
//                 placeholder="Select an item"
//                 defaultSelectedKeys={["cat"]}
//                 className="bg-white text-black"
//                 variant="bordered"
//                 radius="none"
//               >
//                 {animals.map((animal) => (
//                   <SelectItem key={animal.key}>{animal.label}</SelectItem>
//                 ))}
//               </Select>

//               <Select
//                 label="Categories"
//                 placeholder="Select an item"
//                 defaultSelectedKeys={["cat"]}
//                 className="w-[300px] bg-white text-black"
//                 variant="bordered"
//                 radius="none"
//               >
//                 {animals.map((animal) => (
//                   <SelectItem key={animal.key}>{animal.label}</SelectItem>
//                 ))}
//               </Select>

//               <Select
//                 label="Services"
//                 placeholder="Select an item"
//                 defaultSelectedKeys={["cat"]}
//                 className="bg-white text-black"
//                 variant="bordered"
//                 radius="none"
//               >
//                 {animals.map((animal) => (
//                   <SelectItem key={animal.key}>{animal.label}</SelectItem>
//                 ))}
//               </Select>
//               <Select
//                 label="Fees"
//                 placeholder="Select an item"
//                 defaultSelectedKeys={["cat"]}
//                 className="bg-white text-black"
//                 variant="bordered"
//                 radius="none"
//               >
//                 {animals.map((animal) => (
//                   <SelectItem key={animal.key}>{animal.label}</SelectItem>
//                 ))}
//               </Select>
//             </div>
//           </div>
//           <p className="text-center underline font-light mt-4">
//             Generate Template
//           </p>
//           <p className="text-center underline font-light">Upload</p>
//           <div className="flex justify-center">
//             <button
//               className="bg-slate-900 text-white px-[5rem] py-1 rounded-md mt-5"
//               type="submit"
//               onClick={() => {
//                 setShowForm(false);
//                 setShowSummary(true);
//               }}
//             >
//               Continue
//             </button>
//           </div>
//         </form>
//       )}
//       {/* Summary */}
//       {showSummary && (
//         <div>
//           <p className="text-center ml-[-10px] mb-5 font-medium">Summary</p>
//           <div className="w-[600px] mx-auto">
//             <div className="grid grid-cols-2 grid-rows-3 gap-5 w-[300px] mx-auto">
//               <div>
//                 <p className="text-gray-500">Access</p>
//                 <p>{}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Department</p>
//                 <p>{}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">First Name</p>
//                 <p>{}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Surname</p>
//                 <p>{}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Email Address</p>
//                 <p>{}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Phone Number</p>
//                 <p>{}</p>
//               </div>
//             </div>
//           </div>
//           <p className="text-center text-slate-900 font-medium">
//             Do you want to save this user?
//           </p>
//           <div className="flex justify-center gap-3 mt-3">
//             <Button
//               onPress={onOpen}
//               className="bg-slate-900 text-white rounded-md font-medium"
//             >
//               Yes
//             </Button>
//             <Modal
//               isOpen={isOpen}
//               onOpenChange={onOpenChange}
//               isDismissable={false}
//               isKeyboardDismissDisabled={true}
//               className="w-[350px]"
//               radius="none"
//             >
//               <ModalContent>
//                 <>
//                   <ModalBody>
//                     <div className="flex justify-center">
//                       <div className="flex justify-center bg-green-100 w-7 h-7 p-2 rounded-full mt-10">
//                         <img
//                           src={Vector}
//                           width={20}
//                           height={20}
//                           className="object-fit"
//                         />
//                       </div>
//                     </div>

//                     <p className="text-center text-slate-900 font-medium">
//                       Great
//                     </p>
//                     <p className="text-center font-thin mt-[-10px] mb-5">
//                       Service added Successfully
//                     </p>
//                     <button className="bg-slate-900 text-white p-1">
//                       Go back To Dashboard
//                     </button>
//                   </ModalBody>
//                 </>
//               </ModalContent>
//             </Modal>
//             <button className="bg-slate-900 text-white px-10 rounded-md">
//               No
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewService;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Vector from "../../assets/images/Vector.png";
import { animals } from "../../data";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  Select,
  SelectItem,
} from "@nextui-org/react";

const NewService = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({
    select1: "cat",
    select2: "cat",
    select3: "cat",
    select4: "cat",
  });

  const navigate = useNavigate();

  // Function to handle changes in select
  const handleSelectChange = (name, key) => {
    setFormData({
      ...formData,
      [name]: key.currentKey,
    });
  };

  // Function to navigate back to the admin page
  const goToDashboard = () => {
    navigate("/adminpage");
  };

  // Form submit
  const sendForm = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowSummary(true);
  };

  return (
    <div className="border border-gray-500 p-3">
      <h1 className="text-center mb-5">Add New Service</h1>
      <p className="text-[11px] text-center mt-[-15px] mb-4">
        Kindly Enter or upload Details
      </p>
      {showForm && (
        <form onSubmit={sendForm}>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-3">
              <Select
                label="Department"
                placeholder="Select an item"
                className="bg-white text-black"
                variant="bordered"
                radius="none"
                selectedKeys={new Set([formData.select1])}
                onSelectionChange={(key) => handleSelectChange("select1", key)}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key} value={animal.key}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Categories"
                placeholder="Select an item"
                className="w-[300px] bg-white text-black"
                variant="bordered"
                radius="none"
                selectedKeys={new Set([formData.select2])}
                onSelectionChange={(key) => handleSelectChange("select2", key)}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key} value={animal.key}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Services"
                placeholder="Select an item"
                className="bg-white text-black"
                variant="bordered"
                radius="none"
                selectedKeys={new Set([formData.select3])}
                onSelectionChange={(key) => handleSelectChange("select3", key)}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key} value={animal.key}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Fees"
                placeholder="Select an item"
                className="bg-white text-black"
                variant="bordered"
                radius="none"
                selectedKeys={new Set([formData.select4])}
                onSelectionChange={(key) => handleSelectChange("select4", key)}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key} value={animal.key}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <p className="text-center underline font-light mt-4">
            Generate Template
          </p>
          <p className="text-center underline font-light">Upload</p>
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
                <p className="text-gray-500">Department</p>
                <p>{formData.select1}</p>
              </div>
              <div>
                <p className="text-gray-500">Categories</p>
                <p>{formData.select2}</p>
              </div>
              <div>
                <p className="text-gray-500">Services</p>
                <p>{formData.select3}</p>
              </div>
              <div>
                <p className="text-gray-500">Fees</p>
                <p>{formData.select4}</p>
              </div>
            </div>
          </div>
          <p className="text-center text-slate-900 font-medium">
            Do you want to save this service?
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
                    <button
                      className="bg-slate-900 text-white p-1"
                      onClick={goToDashboard}
                    >
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

export default NewService;

