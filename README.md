
# AI4SE_Project
Link to demo: [https://react-frontend-route-sdx-assignment-nhantran.2.rahtiapp.fi/predict](https://react-frontend-route-sdx-assignment-nhantran.2.rahtiapp.fi/predict)

Nowadays, car buyers have a good awareness regarding environmental sustainability. Thus, they are increasingly concerned about environmental impact, CO2 emissions and fuel efficiency. However, with thousands of car models and brands out there, it is challenging for the consumers to quickly find suitable cars tailored to their needs and expectations on CO2 emissions. They need a smart tool to help them make informed, eco-friendly, and data-driven decisions when selecting a vehicle. With those requirements, an AI-based software would be a great choice as it can employ Machine Learning (ML) models to: 

- Predict CO2 emissions based on several different vehicle features such as vehicle company, car model, vehicle class, engine size, number of cylinders, etc. Instead of having to scan through car brand’s website manually, the users can easily enter information about the vehicle’s features and get the results just in seconds. 

- Recommend suitable cars based on the expectations of the users like engine size, number of cylinders, expected fuel consumption, and expected CO2 emissions. Combining with the prediction feature, this can significantly simplify the decision-making process for the car buyers. 

## Run Frontend

In the project directory, you can run:

### `yarn install`

To install all libraries in Package.json 

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Run Backend

> Install modules via `VENV` (windows)

```bash
cd AI4SE_Project
virtualenv env
source env/Scripts/activate
pip install -r requirements.txt
```

> Start the app

```bash
python manage.py runserver
```

> Update requirements.txt

```bash
pip freeze > requirements.txt
```
