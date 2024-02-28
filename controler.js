import { Mural } from "./model.js";

const handleError = (error, res) => {
  console.error(error.msg);
  return res.status(500).json(error);
};

export const getMural = async (req, res) => {
  try {
    const mural = await Mural.findById(req.params.id);
    mural
      ? res.status(201).json({ mural })
      : res.status(404).json({ msg: "Text not found" });
  } catch (error) {
    handleError(error, res);
  }
};
export const getAllMural = async (req, res) => {
  try {
    const mural = await Mural.find();
    res.status(201).json({ mural });
  } catch (error) {
    console.error(error.msg);
    res.status(500).json({ msg: "Error occurred" });
  }
};
export const postMural = async (req, res) => {
  try {
    const mural = await Mural.create(req.body);
    res.status(201).json({ mural });
  } catch (error) {
    console.log(error.msg);
    res.status(500).json({ msg: "Text not found" });
  }
};
export const updateMural = async (req, res) => {
  try {
    const mural = await Mural.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return mural
      ? res.status(201).json({ mural })
      : res.status(404).json({ msg: "Text not found" });
  } catch (error) {
    handleError(error, res);
  }
};
export const deleteMural = async (req, res) => {
  try {
    const mural = await Mural.findByIdAndDelete(req.params.id);
    res.status(201).json({ mural });
  } catch (error) {
    handleError(error, res);
  }
};
