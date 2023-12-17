import { Helmet } from 'react-helmet';
import AddRoomForm from '../../../Components/Form/AddRoomForm';
import { useState } from 'react';
import { imageUpload } from '../../../API/Utils';
import UseAuth from '../../../Hooks/UseAuth';
import toast from 'react-hot-toast';
import { saveRoom } from '../../../API/Rooms';

const AddRoom = () => {

    const { user } = UseAuth();
    const [loading, setloading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')

    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    })

    const handleSubmit = async e => {

        setloading(true)

        e.preventDefault();
        const form = e?.target;

        const location = form?.location?.value;
        const category = form?.category?.value;
        const title = form?.title?.value;
        const price = form?.price?.value;
        const guests = form?.total_guest?.value;
        const bathrooms = form?.bathrooms?.value
        const bedrooms = form?.bedrooms?.value
        const description = form?.description?.value
        const to = dates?.endDate;
        const from = dates?.startDate;
        const host = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL
        };
        const image = form?.image?.files[0];
        const image_url = await imageUpload(image);


        const roomData = {
            location, category, title, price, guests, bathrooms, bedrooms, description, host, from, to, image: image_url?.data?.display_url
        }

        try {
            const data = await saveRoom(roomData);
            console.log(data);
            setloading(false);
            toast.success('Room Added Successfully!!!');
            form.reset();
            console.table(roomData);
        }
        catch (err) {
            setloading(false);
            toast.error(err.message);
            console.log(err.message);
        }
        finally {
            setloading(false);
        }
    }

    const handleDates = ranges => {
        setDates(ranges?.selection)
    }

    const handleImageChange = (image) => {
        if (image?.name) {
            setUploadButtonText(image?.name);
        }
        else setUploadButtonText('Upload Image')
    }

    return (
        <div>
            <Helmet>
                <title>Add Room | Dashboard</title>
            </Helmet>
            <AddRoomForm handleSubmit={handleSubmit} handleDates={handleDates} dates={dates} handleImageChange={handleImageChange} loading={loading} uploadButtonText={uploadButtonText} />
        </div>
    );
};

export default AddRoom;