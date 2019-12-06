### Pre-requisites
* git - [Installation guide](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/) .  
* node.js - [Download page](https://nodejs.org/en/download/) .  
* npm - comes with node or download yarn - [Download page](https://yarnpkg.com/lang/en/docs/install) .  
* mongodb - [Download page](https://www.mongodb.com/download-center/community) .  
* postman - [Download page](https://www.getpostman.com/downloads/)
* mongoose - [Api](https://mongoosejs.com/docs/api.html)
* MongoDB - [CRUD API](https://docs.mongodb.com/manual/crud/index.html)

### Installation 
``` 
git clone https://github.com/vdanyliv/mongoose-workshop
cd mongoose-workshop
npm install
npm start
```
### Workshop plan
Lets try to implement possibility to create users articles, for that we need to implement CRUD operations.

#### 1. User will call POST /atricles - to create new article
  * Create Schema and Model for articles
  * Add owner path to article schema
  * Add schema validation
  * Before creating new article need to check if item and user already exist (search by title)

##### Articles schema
```
{
  title: String,
  description: String,
  owner: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```
#### 2. User will call PUT /articles/:articleId - to update existing article
  - Check if article exist
  - Update article document
#### 3. User will call GET /articles - to get all articles
  - User will have possibility to sort articles
  - User will have possibility to filter articles
  - User will have possibility to use pagination
  - Populate owner of the article
#### 4. User will call DELETE /articles/:articleId - to delete existing article
  - Check if article exist
  - Delete article
  
#### Extra
  - Create end-point that will retriwe articles for specific user
  - Create end-point that will remove all articles for specific user
  
#### Postman
- We will use postman as a request emulator, back-end url http://localhost:port/api/

