import frame1 from '../img/doctor-img01.png'
import frame2 from '../img/doctor-img02.png'
import frame3 from '../img/doctor-img03.png'
import frame4 from '../img/doctor-img03.png'

const Data_service = [
    {
        key: 1,
        image: frame1,
        p: "Pediatrics",
        num: 50,
    },
    {
        key: 2,
        image: frame2,
        p: "Oncology",
        num: 50,
    },
    {
        key: 3,
        image: frame3,
        p: "Dentistry",
        num: 30
    },
    {
        key: 4,
        image: frame4,
        p: "Cadiatic",
        num: 50
    },
]

const Data_doctor = [
    {
        key: 1,
        image: frame1,
        p: "Dr. John Doe",
        p2: "Service",
    },
    {
        key: 2,
        image: frame2,
        p: "Dr. John Doe",
        p2: "Service",
    },
    {
        key: 3,
        image: frame3,
        p: "Dr. John Doe",
        p2: "Service"
    },
    {
        key: 4,
        image: frame4,
        p: "Dr. John Doe",
        p2: "Service"
    },
]

export { Data_service, Data_doctor };