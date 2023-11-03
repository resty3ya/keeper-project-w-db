import { StatusCodes } from "http-status-codes";
import Note from "../models/Note.js";

// Get all notes
export const getAllNotes = async (req, res) => {
  const { title, details, noteStatus, createdBy } = req.query;

  console.log(req);

  const notes = await Note.find(req.query);

  res.status(StatusCodes.OK).json({ notes });
};

// Create Note
export const createNote = async (req, res) => {
  const { title, details } = req.body;

  const note = await Note.create({ title, details });

  res.status(StatusCodes.CREATED).json({ message: "notes created", note });
};

// Update Note
export const updateNote = async (req, res) => {
  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res
    .status(StatusCodes.OK)
    .json({ message: "note modified", note: updatedNote });
};

// Get Note
export const getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);

  res.status(StatusCodes.OK).json({ note });
};

// Delete Note
export const deleteNote = async (req, res) => {
  const removedNote = await Note.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ message: "note deleted" });
};
