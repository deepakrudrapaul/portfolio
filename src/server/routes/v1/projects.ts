import { defineEventHandler } from 'h3';
import { Client, Databases } from 'appwrite';

const url = import.meta.env['VITE_APPWRITE_URL'];
const projectId = import.meta.env['VITE_APPWRITE_PROJECT_ID'];
const databaseId = import.meta.env['VITE_APPWRITE_DATABASE_ID'];
const collectionId = '64cfc2db239f7eefc520';

const client = new Client().setEndpoint(url).setProject(projectId);

const databases = new Databases(client);

const getProjects = async () => {
  const { documents } = await databases.listDocuments(databaseId, collectionId);
  return documents;
};

export default defineEventHandler(getProjects);
