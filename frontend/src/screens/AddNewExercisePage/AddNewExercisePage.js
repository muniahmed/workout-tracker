import axios from "axios";
import React, { useState } from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import ErrorMessage from "../../components/ErrorMessage";
import SuccessMessage from "../../components/SuccessMessage";
import Loading from "../../components/Loading";
import MainScreen from "../MainScreen/MainScreen";

const AddNewExercisePage = () => {
    // const exercises = ["Full Reverse Crunch", "Incline Hip Thrust", "Incline Reverse Crunch", "Lying Hip Thrust", "Reverse Crunch", "Reverse Medicine Ball Crunch", "Alternating Heel Touch", "Bent-Knee Medicine Ball Hip Rotation", "Cable Chop", "Cross Crunch", "Cross Crunch w/ Medicine Ball", "Decline Cross Sit-Up", "Decline Sit-Up w/ Twist", "Reverse Cable Chop", "Seated Medicine Ball Twist", "Trunk Rotator", "Front Plank (from knees)", "Front Plank (from toes)", "Front Plank (tripod - 1 arm and 2 legs or 2 legs and 1 arm)", "Side-Plank (from knees)", "Side-Plank (hip lift)", "Side-Plank (from toes)", "Ab Cycle", "Kneeling Ab Rollout", "Medicine Ball V-Up", "V-Up", "Weighted V-Up", "Bent Knee Sit-Up", "Bent-Knee Crunch", "Crunch", "Crunch", "Decline Crunch", "Decline Sit-Up", "Heel Touch", "Sit-Up", "Weighted Crunch", "Assisted Pull-Up", "Close-Grip Lat Pulldown", "Inverted Pull-Up", "Lat Pulldown", "Pull-Up", "Reverse-Grip Lat Pullown", "Reverse-Grip Pull-Up", "V-Bar Pull-Up", "Wide-Grip Lat Pulldown", "Bent-Over Alternating Dumbbell Row", "Bent-Over Barbell Row", "Bent-Over Dumbbell Row", "Bent-Over Hammer Dumbbell Row", "Bent-Over Long Barbell Row", "Bent-Over Reverse-Grip Barbell Row", "Bent-Over Single-Arm Long Barbell Row", "Machine Row", "One Arm Dumbbell Row", "Reverse Incline Dumbbell Row", "Rope Cable Row", "Seated Cable Row", "Seated Row", "Single-Arm Cable Row", "Single-Arm Dumbbell Row", "Single-Arm Lat Pulldown", "Standing Cable Row", "Standing Single-Arm Cable Row", "Alternating Dumbbell Curl", "Alternating Hammer Curl", "Barbell Curl", "Bicep Curl", "Bottom/Top/Full Curls", "Cable Curl", "Concentration Dumbbell Curl", "Cross Body Hammer Curl", "Dumbbell Curl", "EZ-Bar Curl", "Hammer Curl", "Incline Alternating Dumbbell Curl", "Incline Alternating Hammer Curl", "Incline Dumbbell Curl", "Incline Hammer Curl", "Kneeling Cable Curl", "Lying Cable Curl", "Lying Double Biceps Cable Curl", "Lying High Cable Curl", "Machine Curl", "Overhead Double Biceps Cable Curl", "Overhead Rope Cable Curl", "Preacher Barbell Curl", "Preacher Cable Curl", "Preacher Dumbbell Curl", "Preacher EZ-Bar Curl", "Preacher Hammer Dumbbell Curl", "Preacher Single-Arm Dumbbell Curl", "Reverse Curl", "Rope Cable Curl", "Seated Alternating Curl", "Seated Alternating Hammer Curl", "Seated Dumbbell Curl", "Seated Hammer Curl", "Single-Arm Barbell Curl", "Single-Arm Cable Curl", "Single-Arm Dumbbell Curl w/ Incline Bench", "Spider Curl", "Barbell Calf Raise", "Calf Press", "Calf Raise - Seated", "Calf Raise - Standing", "Dumbbell Calf Raise", "Single-Leg Calf Press", "Single-Leg Dumbbell Calf Raise", "Smith Machine Calf Raise", "Seated Calf Raise", "Seated Single-Leg Calf Raise", "Alternating Dumbbell Bench Press", "Barbell Bench Press", "Chest Press", "Decline Dumbbell Bench Press", "Decline Smith Machine Bench Press", "Dumbbell Bench Press", "Dumbbell Push-Up", "Elevated Push-Up", "Flat Bench Press", "Incline Alternating Dumbbell Bench Press", "Incline Barbell Bench Press", "Incline Bench Press", "Incline Dumbbell Bench Press", "Incline Hammer Dumbbell Bench Press", "Incline Single-Arm Dumbbell Bench Press", "Incline Smith Machine Bench Press", "Incline Twisting Dumbbell Bench Press", "Kneeling Push-Up", "Machine Bench Press", "Machine Vertical Bench Press", "Medicine Ball Crossover Push-Up", "Push-Up", "Single-Arm Dumbbell Bench Press", "Smith Machine Bench Press", "Twisting Dumbbell Bench Press", "Wide-Grip Push-Up", "Cable Crossover", "Cable Fly", "Decline Dumbbell Fly", "Dumbbell Fly", "High Cable Crossover", "Incline Cable Fly", "Incline Dumbbell Fly", "Incline Twisting Dumbbell Fly", "Low Cable Crossover", "Pec Deck", "Pec Deck Fly", "Bent-Knee Single-Leg Hip Lift", "Elevated Hip Lift", "Elevated Single-Leg Hip Lift", "Hip Lift", "Single-Leg Hip Lift", "Deadlift", "Leg Curl", "Lying Alternating Leg Curl", "Lying Leg Curl", "Lying Single-Leg Curl", "Seated Leg Curl", "Barbell Diagonal Lunge", "Barbell Hack Squat", "Barbell Lunge", "Barbell Reverse Lunge", "Barbell Side Lunge", "Barbell Split Squat", "Barbell Squat", "Barbell Step-Up", "Barbell Walking Lunge", "Diagonal Lunge", "Dumbbell Diagonal Lunge", "Dumbbell Lunge", "Dumbbell Reverse Lunge", "Dumbbell Side Lunge", "Dumbbell Split Squat", "Dumbbell Squat", "Dumbbell Step-Up", "Dumbbell Walking Lunge", "Forward Lunge", "Lateral Barbell Squat", "Lateral Barbell Step-Up", "Lateral Squat", "Lateral Step-Up", "Leg Press", "Lunge", "Lying Machine Squat", "Machine Hack Squat", "Reverse Lunge", "Single-Arm Barbell Side Squat", "Single-Arm Dumbbell Side Squat", "Single-Leg Barbell Squat", "Single-Leg Box Squat", "Single-Leg Dumbbell Box Squat", "Single-Leg Dumbbell Squat", "Single-Leg Squat", "Smith Machine Squat", "Split Squat", "Step-Up", "Walking Lunge", "Alternating Leg Extension", "Leg Extension", "Single-Leg Extension", "Alternating Superman", "Back Raise", "Quadruped Alternating Superman", "Superman", "Superman Hold", "Arnold Dumbbell Press", "Barbell Shoulder Press", "Dumbbell Alternating Shoulder Press", "Dumbbell Front Raise", "Dumbbell Shoulder Press", "Dumbbell Twisting Shoulder Press", "Machine Shoulder Press", "Seated Dumbbell Rear Delt Elbow Raise", "Single-Arm Dumbbell Shoulder Press", "Smith Machine Shoulder Press", "Barbell Front Raise", "Bent-Over Cable Rear Delt Raise", "Bent-Over Dumbbell Rear Delt Raise", "Cable Front Raise", "Cable Lateral Raise", "Dumbbell Lateral Raise", "Front Plate Raise", "Kneeling Single-Arm Cable Rear Delt Raise", "Lying Dumbbell External Rotation", "Lying Dumbbell Rear Delt Raise", "Lying Single-Arm Dumbbell Rear Delt Raise", "Pec Deck Real Delt Extensions", "Reverse Incline Dumbbell Rear Delt Raise", "Seated Dumbbell Rear Delt Raise", "Single-Arm Cable Lateral Raise", "Cable External Rotation", "Close-Grip Bench Press", "Forward Lean Dips", "Assisted Dips", "Bench Dips", "Diamond Push-Up", "Dips", "Machine Dips", "Decline Dumbbell Triceps Extension", "Decline EZ-Bar Tricep Extension", "Decline Single Dumbbell Triceps Extension", "Decline Single-Arm Dumbbell Triceps Extension", "Dumbbell Kickback", "Incline EZ-Bar Tricep Extension", "Kneeling Cable Triceps Extension", "Leaning Overhead Tricep Extension", "Low Cable Triceps Extension", "Lying Cable Triceps Extension", "Lying EZ-Bar Triceps Extension", "Lying Overhead EZ-Bar Tricep Extension", "Lying Reverse EZ-Bar Triceps Extension", "Lying Single Dumbbell Triceps Extension", "Lying Single-Arm Dumbbell Triceps Extension", "Lying Tricep Extensions", "Overhead Dumbbell Triceps Extension", "Overhead EZ-Bar Triceps Extension", "Overhead Rope Cable Tricep Extension", "Overhead Single Dumbbell Tricep Extension", "Overhead Single-Arm Cable Tricep Extension", "Overhead Single-Arm Dumbbell Tricep Extension", "Reverse Tricep Pushdown", "Rope Triceps Pushdown", "Single-Arm Towel Triceps Pushdown", "Single-Arm Triceps Pushdown", "Towel Triceps Pushdown", "Tricep Extensions", "Tricep Pushdown", "Tricep Pushdown", "V-Bar Tricep Pushdown"];

    // const [exerciseList, setExerciseList] = useState([]);
    const [name, setName] = useState("");
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSets = (e) => {
        setSets(e.target.value);
    };

    const handleReps = (e) => {
        setReps(e.target.value);
    };

    const handleWeight = (e) => {
        setWeight(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const newEntry = {
        //     name: name,
        //     sets: sets,
        //     reps: reps,
        //     weight: weight,
        // };

        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                    "Content-Type": "application/json",
                },
            };

            setLoading(true);

            console.log({ name, sets, reps, weight })

            const { data } = await axios.post(
                "/api/exercises/create",
                { name, sets, reps, weight },
                config
            )

            setLoading(false);
            setSuccess("Exercise successfully added!")
            setName("");
            setSets(0);
            setReps(0);
            setWeight(0);
            setError(false);
        } catch (error) {
            setError(error.response.data.message);
            setLoading(false);
        }

        // setExerciseList([...exerciseList, newEntry]);


    };

    // const createExerciseAction = async (e) => {
    //     e.preventDefault();

    //     const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    //     try {
    //         const config = {
    //             headers: {
    //                 Authorization: `Bearer ${userInfo.token}`,
    //                 "Content-Type": "application/json",
    //             },
    //         };

    //         setLoading(true);

    //         const { data } = await axios.post(
    //             "/api/exercises/create",
    //             { name, sets, reps, weight },
    //             config
    //         )

    //         setLoading(false);
    //     } catch (error) {
    //         setError(error.response.data.message);
    //         setLoading(false);
    //     }
    // };

    return (
        <MainScreen title="Add new exercise">
            <Form>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {loading && <Loading />}
                {success && <SuccessMessage variant="success">{success}</SuccessMessage>}
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Workout</InputGroup.Text>
                    <Form.Control
                        placeholder="Name"
                        aria-label="Name"
                        aria-describedby="basic-addon1"
                        onChange={handleName}
                        value={name}
                    />
                    <InputGroup.Text id="basic-addon1">Sets</InputGroup.Text>
                    <Form.Control
                        placeholder="Sets"
                        aria-label="Sets"
                        aria-describedby="basic-addon1"
                        type="number"
                        min={0}
                        onChange={handleSets}
                        value={sets}
                    />
                    <InputGroup.Text id="basic-addon1">Reps</InputGroup.Text>
                    <Form.Control
                        placeholder="Reps"
                        aria-label="Reps"
                        aria-describedby="basic-addon1"
                        type="number"
                        min={0}
                        onChange={handleReps}
                        value={reps}
                    />
                    <InputGroup.Text id="basic-addon1">Weight</InputGroup.Text>
                    <Form.Control
                        placeholder="Weight"
                        aria-label="Weight"
                        aria-describedby="basic-addon1"
                        type="number"
                        min={0}
                        onChange={handleWeight}
                        value={weight}
                    />
                </InputGroup>

                <Button
                    variant="primary"
                    type="submit"
                    className="float-end mb-3"
                    onClick={handleSubmit}
                >
                    Submit exercise
                </Button>
            </Form>

            {/* <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {exerciseList.map((e, index) => (
                        <tr key={index}>
                            <td>{e.name}</td>
                            <td>{e.sets}</td>
                            <td>{e.reps}</td>
                            <td>{e.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button
                variant="primary"
                type="submit"
                className="float-end mb-3"
                onClick={createExerciseAction}
            >
                Submit workout
            </Button> */}
        </MainScreen>
    );
};

export default AddNewExercisePage;
