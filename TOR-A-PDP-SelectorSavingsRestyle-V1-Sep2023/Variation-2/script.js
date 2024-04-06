/* Variation 2 */

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

    /* Product Description */

    // Move product description to be above the ingredients.

    const productAttributes = document.querySelector('.product_attributes');
    const productDescription = document.querySelector('.product-block.hide-on-mobile');
    const ingredientsContent = document.querySelector('.ingredientscont');

    // Create a container to group the description and ingredients.

    const productAttributesGroup = document.createElement('div');
    productAttributesGroup.classList.add('product_attributes__group');

    // Add the container to the attributes section.

    if (productAttributes) {
      productAttributes.insertBefore(productAttributesGroup, productAttributes.firstChild);
    }

    // Move the description inside the new container.

    if (productDescription) {

      productDescription.classList.add('descriptioncont');
      productDescription.classList.remove('product-block', 'hide-on-mobile');

      const productDescriptionTitle = document.createElement('h2');
      productDescriptionTitle.innerHTML = 'Product Description';

      productDescription.insertBefore(productDescriptionTitle, productDescription.firstChild);
      productAttributesGroup.appendChild(productDescription);

    }

    // Move the ingredients inside the new container.

    if (ingredientsContent) {
      productAttributesGroup.appendChild(ingredientsContent);
    }

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
