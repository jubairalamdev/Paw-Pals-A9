import AllPets from "@/components/AllPets/AllPets";
import Testimonials from "@/components/homepage/Testimonials";
import { getAllPets } from "@/utils/actions";

const AllPetsPage = async() => {
      const pets = await getAllPets()
      console.log(pets)
    return (
        <>
            <AllPets pets={pets}/>
            <Testimonials />
        </>
    );
};

export default AllPetsPage;
