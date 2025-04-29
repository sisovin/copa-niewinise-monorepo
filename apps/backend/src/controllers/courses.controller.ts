import { Request, Response } from 'express';
import Course from '../models/course.model';

export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course' });
  }
};

export const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const newCourse = await Course.create({ title, description });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create course' });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const course = await Course.findByPk(req.params.id);
    if (course) {
      course.title = title;
      course.description = description;
      await course.save();
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update course' });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (course) {
      await course.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete course' });
  }
};
