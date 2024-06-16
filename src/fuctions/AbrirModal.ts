import { useState } from "react";

export const [showModal, setShowModal] = useState(false);

export const AbrirModal =()=>setShowModal(true)