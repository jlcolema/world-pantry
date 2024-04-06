/* Variation 1 */

try {
  var onDocumentLoad = function () {

    console.log(123);

    // Add global class to `body` element

    document.body.classList.add('ti12');

    /* Breadcrumbs */

    // Move breadcrumbs outside of `.page-content` to display at full-width.

    const breadcrumbs = document.querySelector('.breadcrumb');
    const pageContent = document.querySelector('.page-content');

    if (breadcrumbs) {
      pageContent.parentNode.insertBefore(breadcrumbs, pageContent);
    }

    /* Choose Your Size */

    // Change field labels to "Choose Your Size"

    const chooseYourSize = document.querySelectorAll('.variant__label, .variant-input-wrap legend');

    chooseYourSize.forEach(element => {
      if (element) {
        element.textContent = 'Choose Your Size';
      }
    });

    // Dropdown

    // Function to update the selected variant

    function updateSelectedVariant() {

      // Remove the existing 'variant-input--selected-size' div, if any
      const existingDiv = document.querySelector('.variant-input--selected-size');

      if (existingDiv) {
        existingDiv.remove();
      }

      // Find the checked radio input
      const checkedInput = document.querySelector('.variant-input input[type="radio"]:checked');

      // Find the label associated with the checked radio input
      const associatedLabel = document.querySelector(`label[for="${checkedInput.id}"]`);

      // Create a new div element
      const newDiv = document.createElement('div');
      newDiv.classList.add('variant-input--selected-size');

      // Copy content from the associated label to the new div
      newDiv.innerHTML = associatedLabel.innerHTML;

      // Find the element before which you want to insert the new div
      const targetElement = document.querySelector('.variant-input-wrap');

      // Insert the new div before the target element
      targetElement.parentNode.insertBefore(newDiv, targetElement);

    }

    // Run the function immediately to handle the pre-selected radio button
    updateSelectedVariant();

    // Also run the function whenever a radio input changes
    const radioInputs = document.querySelectorAll('.variant-input input[type="radio"]');

    radioInputs.forEach(input => {
      input.addEventListener('change', updateSelectedVariant);
    });

    // Add toggle events to show and hide the dropdown.

    function addToggleEvents() {
      // Cache DOM elements for performance
      const selectedSizeDiv = document.querySelector('.variant-input--selected-size');
      const variantInputWrap = document.querySelector('.variant-input-wrap');
      const variantInputs = document.querySelectorAll('.variant-input');

      // Toggle class when `.variant-input--selected-size` is clicked
      if (selectedSizeDiv) {
        selectedSizeDiv.addEventListener('click', (event) => {
          variantInputWrap.classList.toggle('variant-input-wrap--is-open');
          selectedSizeDiv.classList.toggle('variant-input-wrap--is-open');
          event.stopPropagation(); // Prevent the event from bubbling up
        });
      }

      // Remove class when any `.variant-input` is clicked
      variantInputs.forEach(input => {
        input.addEventListener('click', (event) => {
          variantInputWrap.classList.remove('variant-input-wrap--is-open');
          selectedSizeDiv.classList.remove('variant-input-wrap--is-open');
          event.stopPropagation(); // Prevent the event from bubbling up
        });
      });

      // Remove class when clicking outside
      document.addEventListener('click', () => {
        variantInputWrap.classList.remove('variant-input-wrap--is-open');
        selectedSizeDiv.classList.remove('variant-input-wrap--is-open');
      });
    }

    // Call this function inside your `onDocumentLoad` or `initialize` function
    addToggleEvents();

    // If there is a `.glassplasticheader` outside of `.variant-input-wrap`,
    // move it inside after the legend element.

    function moveGlassPlasticHeader() {
      // Find the `.glassplasticheader` div
      const glassPlasticHeader = document.querySelector('.glassplasticheader');

      // Find the `.variant__label` label
      const variantLabel = document.querySelector('.variant__label');

      // Find the `.variant-input-wrap` and `legend` elements
      const variantInputWrap = document.querySelector('.variant-input-wrap');
      const variantLegend = document.querySelector('.variant-input-wrap legend');

      // Check if all elements exist
      if (glassPlasticHeader && variantLabel && variantInputWrap && variantLegend) {
        // Check if `.glassplasticheader` appears after `.variant__label`
        let currentElement = variantLabel;
        let found = false;
        while (currentElement.nextElementSibling) {
          currentElement = currentElement.nextElementSibling;
          if (currentElement === glassPlasticHeader) {
            found = true;
            break;
          }
        }

        // If yes, move `.glassplasticheader` to be inside `.variant-input-wrap` and place it after the `legend`
        if (found) {
          variantInputWrap.insertBefore(glassPlasticHeader, variantLegend.nextElementSibling);
        }
      }
    }

    moveGlassPlasticHeader();

  };
  // ensures code runs when content is loaded
  if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    onDocumentLoad();
  } else {
    document.addEventListener("DOMContentLoaded", onDocumentLoad);
  }
} catch (err) {
  console.log(err);
}
