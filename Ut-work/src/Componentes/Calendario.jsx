import React, { useState, useEffect } from "react";

const Calendario = () => {
    const currentDate = new Date();
    const [date, setDate] = useState(currentDate);
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventText, setEventText] = useState("");
    const [editedEventIndex, setEditedEventIndex] = useState(null);
    const [originalEventText, setOriginalEventText] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false); // Nuevo estado para mostrar el formulario de edición

    const daysInMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();
    const firstDayOfMonth = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
    ).getDay();

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const prevMonth = () => {
        const previousMonth = new Date(
            date.getFullYear(),
            date.getMonth() - 1,
            date.getDate()
        );
        setDate(previousMonth);
    };

    const nextMonth = () => {
        const nextMonth = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
        );
        setDate(nextMonth);
    };

    const handleDayClick = (day) => {
        setSelectedDate(day);
        setEventText("");
        setShowAddForm(true);
        setShowEditForm(false); // Asegurarse de que el formulario de edición esté oculto al hacer clic en una fecha
    };

    const addEvent = () => {
        if (selectedDate !== null && eventText !== "") {
            setEvents([...events, { date: selectedDate, text: eventText }]);
            setSelectedDate(null);
            setEventText("");
            setShowAddForm(false);
        }
    };

    const startEditEvent = (index, text) => {
        setEditedEventIndex(index);
        setOriginalEventText(text);
        setShowEditForm(true); // Mostrar el formulario de edición al hacer clic en "Editar"
        setShowAddForm(false); // Asegurarse de que el formulario de añadir esté oculto al editar
    };

    const saveEditedEvent = (index) => {
        if (eventText !== "") {
            const updatedEvents = [...events];
            updatedEvents[index].text = eventText;
            setEvents(updatedEvents);
            setEditedEventIndex(null);
            setOriginalEventText("");
            setShowEditForm(false); // Ocultar el formulario de edición después de guardar
        }
    };

    const cancelEditEvent = () => {
        setEditedEventIndex(null);
        setOriginalEventText("");
        setShowEditForm(false); // Ocultar el formulario de edición al cancelar
    };

    const deleteEvent = (index) => {
        const updatedEvents = events.filter((_, i) => i !== index);
        setEvents(updatedEvents);
    };

    useEffect(() => {
        localStorage.setItem("calendar-events", JSON.stringify(events));
    }, [events]);

    useEffect(() => {
        const savedEvents = JSON.parse(localStorage.getItem("calendar-events"));
        if (savedEvents) {
            setEvents(savedEvents);
        }
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white rounded-lg shadow-lg">
                <div className="p-4 border-b">
                    <div className="flex justify-between items-center">
                        <button
                            onClick={prevMonth}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            &lt;
                        </button>
                        <h2 className="text-2xl font-semibold">
                            {date.toLocaleDateString("default", { month: "long" })}{" "}
                            {date.getFullYear()}
                        </h2>
                        <button
                            onClick={nextMonth}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            &gt;
                        </button>
                    </div>
                </div>
                <div className="p-4 grid grid-cols-7 gap-2">
                    {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => (
                        <div key={day} className="text-center text-gray-500">
                            {day}
                        </div>
                    ))}
                    {Array.from({ length: firstDayOfMonth }, (_, i) => (
                        <div key={`empty-${i}`}></div>
                    ))}
                    {days.map((day) => (
                        <div
                            key={day}
                            className="text-center cursor-pointer border border-gray-200 p-2 rounded"
                            onClick={() => handleDayClick(day)}
                        >
                            {day}
                            {events.map((event, index) => {
                                if (event.date === day) {
                                    if (editedEventIndex === index) {
                                        return (
                                            <div key={`event-${index}`}>
                                                <input
                                                    type="text"
                                                    value={eventText}
                                                    onChange={(e) => setEventText(e.target.value)}
                                                />
                                                <button
                                                    className="guardar"
                                                    onClick={() => saveEditedEvent(index)}
                                                >
                                                    Guardar
                                                </button>
                                                <button className="cancelar" onClick={cancelEditEvent}>
                                                    Cancelar
                                                </button>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                key={`event-${index}`}
                                                className="text-sm text-blue-600 cursor-pointer"
                                            >
                                                {event.text}
                                                <button
                                                    onClick={() => startEditEvent(index, event.text)}
                                                >
                                                    <ion-icon
                                                        class="editar"
                                                        name="pencil-outline"
                                                    ></ion-icon>
                                                </button>
                                                <button onClick={() => deleteEvent(index)}>
                                                    <ion-icon
                                                        class="eliminar"
                                                        name="trash-outline"
                                                    ></ion-icon>
                                                </button>
                                            </div>
                                        );
                                    }
                                }
                                return null;
                            })}
                        </div>
                    ))}
                </div>
                <div className="p-4">
                    {showAddForm && (
                        <div className="mb-2">
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                placeholder="Añadir evento"
                                value={eventText}
                                onChange={(e) => setEventText(e.target.value)}
                            />
                            <button
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded"
                                onClick={addEvent}
                            >
                                Añadir
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Calendario;
