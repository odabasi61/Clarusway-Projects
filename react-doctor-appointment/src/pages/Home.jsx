import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { doctorData } from "../helpers/data";
import { appointmentData } from "../helpers/data";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [appointments, setAppointments] = useState(appointmentData);
  // console.log(doctorData, appointmentData)

  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors
        doctors={doctors}
        appointments={appointments}
        setAppointments={setAppointments}
      />
      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </main>
  );
};

export default Home;
