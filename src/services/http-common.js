import axios from "axios";

const BASE_URL = 'http://localhost:5555/api';

export default axios.create({
    method: "POST",
    headers: {
        "Content-type": "application/json"
    }
})