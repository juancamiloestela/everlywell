
To run
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To build
### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Overview

I focused on the required specs and additionally added the favorite functionality saving it in localstorage. The specs did not require redux, but in a real world scenario it will most likely be used to maintain state between pages (eg. favorites, "cache" recipe data in memory for the current session). Data in the random recipes load is using the random endpoint provided. There is no duplicate random result check at the moment so in some cases you might see the same recipe twice. 

The data returned from it is the same as the one used in the detail page, so at the moment it is inefficient as it is loading the same data twice. In a real world app this would change as the list page api would return only the required data for the list, and then the detail page would load the full data of the specific recipe. 

Data also refreshes every time the main page is loaded and the "recipes of the day" are in fact "recipes of this page load". This would ideally be solved from back end too. 

Responsive behavior is part of the specs so instead of adding redux I took a risk testing a new apporach which I've been craving for a long time, container queries. Not the final spec implementation but in this case a js one, but should be fairly easy to migrate to the final spec once targeted browsers support it.

The search functionality spec is strange. From the designs it looks like the user types the keywords and gets a list of matching names. Eg. type "apple" and you see a list with "apple pie", "apple crumble", "apple x", etc. From the api docs and responses, those would be the recipe names. Meaning, a specific recipe, so choosing one would result in the detail view instead of a list of one? According to the specs the results should be shown in the main page where the random ones are, but the data available does not match and/or creates a strange ux. I am assuming you want to see component reutilization so I am showing results in the same design as the main page, but opening the result in the detail page.

Total time was ~4hrs + ~45mins setting up the project.

# Roadmap (prioritized)
- Fix having to scroll to see search input when keyboard pops up
- Fix dropshadow on search button in mobile
- Mobile has a lot to be improved visually, GlobalSearch is not really global so consider making it a standalone page/route and remove floating elements that use position fixed which is not reliable in older devices.
- Unit tests, for this data transforming functions should be extracted as units
- Move localstorage favorite functionality to a data layer/separate file. React component shouldn't be aware of localstorage.
- More elements can be componentized. Eg. Gray header bar in detail and search pages.
- Overlay designs or specify styleguide to match designs pixel perfectly
- Add accessibility elements. Aria, Color contrast
- Update back end to provide efficient calls. Eg. don't load recipe instructions and ingredients in list view
- Update back end to ensure random recipes are not repeated and in one call. FE could handle this but I'd rather tackle this from the source
- Add redux to maintain state in between pages, centralize api calls in actions
- Cross browser testing
- Error handling/screens
- Some elements can still be split into higher order components
- Scss is barely used, leverage variables at least?
- Improve desktop responsive design. Container query behavior works but not fully exploited. List items are all clickable, split into correct html structure.
- Page transitions
- Loading and empty states