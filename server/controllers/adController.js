import Advertisement from "../models/adModels";

export const adPage = async (req, res) => {
    try{
        const ads = await Advertisement.find();
        res.status(200).json(ads)
    } catch(err){
        res.status(500).json({ message: 'Failed to fetch advertisements', err });
    }
}