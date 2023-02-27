import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function AddModal({ show, handleClose, selectedDrName, appointments, setAppointments }) {
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      setAppointments([...appointments, {id: appointments.length + 1,
        patient: patientName,
        day: date,
        consulted: false,
          doctor: selectedDrName,
      }])
    handleClose();
    };
    
    console.log(appointments)

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {selectedDrName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" 
              onChange={(e) => setPatientName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="datetime">
              <Form.Label>Day&Time</Form.Label>
              <Form.Control type="datetime-local" onChange={(e) => setDate(e.target.value)}/>
            </Form.Group>

            <div className="d-flex justify-content-center gap-3">
              <Button variant="success" type="submit">
                Save
              </Button>

              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
