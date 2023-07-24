import { Client } from "@notionhq/client";
import { defineEventHandler } from 'h3';

const token = import.meta.env['VITE_NOTION_TOKEN'];
const databaseId = import.meta.env['VITE_DATABASE_ID'];
const notion = new Client({auth: token });




const  getProjects = async () => {
   
   const {results} = await notion.databases.query({database_id: databaseId});
   const data = results.map((result:any) => {
      let obj:any = {};
      obj.name = result.properties.name.title[0].plain_text;
      obj.description = result.properties.description.rich_text[0].plain_text;
      obj.image = result.properties.image.files[0].name;
      obj.githubLink = result.properties.githubLink.url;
      obj.projectLink = result.properties.projectLink.url;
      obj.tag = result.properties.tag.multi_select.map((tag:any) => tag.name);
      return obj;
   })
   return data;
}

export default defineEventHandler(getProjects);
