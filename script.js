let checkoutPrice = 0;
let checkoutPagekage = "";
let checkoutPaymentType = "";
let checkoutPrefix = "";
let checkoutName = "";
let checkoutPhone = "";
let checkoutAddr = "";

// Select package

function setSeletColor(idName) {
  const ele = document.getElementById(idName);
  ele.style.background = "#88C273";
}

function clearSeletColor(idName) {
  const ele = document.getElementById(idName);
  ele.style.background = "rgb(232, 201, 205)";
}

function setReceipt() {
  const elePrice = document.getElementById("receipt-price-value");
  const elePayment = document.getElementById("receipt-payment-type-value");
  const elePrefix = document.getElementById("receipt-prefix-value");
  const eleName = document.getElementById("receipt-name-value");
  const elePhome = document.getElementById("receipt-phone-value");
  const eleAddr = document.getElementById("receipt-address-value");

  elePrice.innerText = `$${checkoutPrice} ${checkoutPagekage}`;
  elePayment.innerText = checkoutPaymentType;
  elePrefix.innerText = checkoutPrefix;
  eleName.innerText = checkoutName;
  elePhome.innerText = checkoutPhone;
  eleAddr.innerText = checkoutAddr;

  console.log(checkoutAddr);
  if (
    checkoutPagekage !== "" &&
    checkoutPrice != 0 &&
    checkoutPaymentType != "" &&
    checkoutPrefix != "" &&
    checkoutName != "" &&
    checkoutPhone != "" &&
    checkoutAddr != ""
  ) {
    return;
  } else {
    const eleRecript = document.getElementById("receipt");
    eleRecript.style.display = "none";
  }
}

function setCheckoutPackage() {
  const eleCheckoutPrice = document.getElementById(
    "checkout-package-price-value"
  );

  const eleCheckoutPagekageName = document.getElementById(
    "checkout-package-name"
  );

  eleCheckoutPrice.innerText = `$${checkoutPrice}`;
  eleCheckoutPagekageName.innerHTML = checkoutPagekage;

  setReceipt();
}

/**
 * Payment
 */

function setCheckoutPaymentType(paymentType) {
  const eleCheckoutPaymentType = document.getElementById(
    "checkout-package-payment-value"
  );

  eleCheckoutPaymentType.innerText = paymentType;

  setReceipt();
}

function selectPaypal() {
  checkoutPaymentType = "Paypals";
  setCheckoutPaymentType("Paypals");

  setReceipt();
}

function selectCheck() {
  checkoutPaymentType = "Check";
  setCheckoutPaymentType("Check");

  setReceipt();
}

function selectCash() {
  checkoutPaymentType = "Cash";
  setCheckoutPaymentType("Cash");

  setReceipt();
}

////////////////////////////////////

// Prfix

function selectPrefix() {
  const elePrefixSelect = document.getElementById(
    "checkout-package-prefix-value"
  );

  checkoutPrefix = elePrefixSelect.value;

  setReceipt();
}

function inputName() {
  const eleName = document.getElementById("checkout-package-username-value");
  checkoutName = eleName.value;

  setReceipt();
}

function inputPhone() {
  const elePhone = document.getElementById("checkout-package-userphone-value");
  checkoutPhone = elePhone.value;

  setReceipt();
}

function inputAddress() {
  const eleAddress = document.getElementById("checkout-package-address-value");

  checkoutAddr = eleAddress.value;
}

function selectPackgeEnterPrice() {
  setSeletColor("package-item-list-enterprise");

  // clear color
  clearSeletColor("package-item-list-professional");
  clearSeletColor("package-item-list-standard");

  checkoutPrice = 1999;
  checkoutPagekage = "Enterprise package";

  setCheckoutPackage();
}

function selectPackgeProfessional() {
  setSeletColor("package-item-list-professional");

  // clear color
  clearSeletColor("package-item-list-standard");
  clearSeletColor("package-item-list-enterprise");

  checkoutPrice = 799;
  checkoutPagekage = "Professional package";
  setCheckoutPackage();
}

function selectPackgeStandard() {
  setSeletColor("package-item-list-standard");

  // clear color
  clearSeletColor("package-item-list-professional");
  clearSeletColor("package-item-list-enterprise");

  checkoutPrice = 349;
  checkoutPagekage = "Standard package";
  setCheckoutPackage();
}

function chckout() {
  if (
    !checkoutAddr ||
    !checkoutName ||
    !checkoutPagekage ||
    !checkoutPrice ||
    !checkoutPaymentType ||
    !checkoutPhone ||
    !checkoutPrefix
  ) {
    alert("Plase fill information");
    return;
  } else {
    const eleRecript = document.getElementById("receipt");
    eleRecript.style.display = "block";
  }
}
