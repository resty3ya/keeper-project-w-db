import { StatusCodes } from "http-status-codes";
import Note from "../models/Note.js";

// Get all notes
export const getAllNotes = async (req, res) => {
  res.send("get all notes");
};

// Create Note
export const createNote = async (req, res) => {
  res.send("note created");
};

// Update Note
export const updateNote = async (req, res) => {
  res.send("note updated");
};

// Get Note
export const getNote = async (req, res) => {
  res.send("get note");
};

// Delete Note
export const deleteNote = async (req, res) => {
  res.send("note deleted");
};
