(function () {
  let updateList = [];
  const tableBody = document.getElementsByClassName("table__body");
  const body = document.getElementsByTagName("body");

  // Сброс и отрисовка таблицы
  function redo(wind) {
    wind.remove();
    cleanTable();
    updateList.sort((a, b) => a.id - b.id);
    createAllTable(updateList);
  }

  // Создает окно удалить клиента
  function createWindowDelete() {
    const div1 = document.createElement("div");
    div1.classList.add("black-wrapper", "delete");
    const divBlock = document.createElement("div");
    divBlock.classList.add("modal-block");
    div1.append(divBlock);

    const div2 = document.createElement("div");
    div2.classList.add("modal-window");

    const btn1 = document.createElement("button");
    btn1.classList.add("close");
    btn1.id = "delete-close";
    div2.append(btn1);
    div1.append(div2);

    const div3 = document.createElement("div");
    div3.classList.add("modal-window__wrapper", "pad-delete");

    const h2 = document.createElement("h2");
    h2.classList.add("title", "title--mb");
    h2.textContent = "Удалить клиента";

    const p = document.createElement("p");
    p.classList.add("data", "data--delete");
    p.textContent = "Вы действительно хотите удалить данного клиента?";

    const btn2 = document.createElement("button");
    btn2.classList.add("btn", "btn--purple");
    btn2.id = "btn-delete";
    btn2.type = "submit";
    btn2.textContent = "Удалить";

    const btn3 = document.createElement("button");
    btn3.classList.add("gray-text", "gray-text--black", "effect");
    btn3.id = "abolition";
    btn3.textContent = "Отмена";

    div3.append(h2);
    div3.append(p);
    div3.append(btn2);
    div3.append(btn3);
    div2.append(div3);
    body[0].append(div1);
    return div1;
  }

  // Создает окно новый клиент
  function createWindowNewClient() {
    const div1 = document.createElement("div");
    div1.classList.add("black-wrapper", "new-client");
    const divBlock = document.createElement("div");
    divBlock.classList.add("modal-block");
    div1.append(divBlock);

    const div2 = document.createElement("div");
    div2.classList.add("modal-window");

    const btn1 = document.createElement("button");
    btn1.classList.add("close");
    btn1.id = "new-client__close";
    div2.append(btn1);
    div1.append(div2);

    const form = document.createElement("form");
    form.action = "POST";
    form.classList.add("form");
    form.id = "form-new-client";

    const div3 = document.createElement("div");
    div3.classList.add("modal-window__wrapper");

    const h2 = document.createElement("h2");
    h2.classList.add("title", "form__title");
    h2.textContent = "Новый клиент";
    div3.append(h2);

    const div4 = document.createElement("div");
    div4.classList.add("inputs");

    const div5 = document.createElement("div");
    div5.classList.add("inputs__row");
    const input1 = document.createElement("input");
    input1.classList.add("data", "data--input");
    input1.id = "last-name-new";
    input1.type = "text";
    input1.name = "surname";
    div5.append(input1);

    const label1 = document.createElement("label");
    label1.classList.add("form__label");
    label1.setAttribute("for", "last-name-new");
    const span1 = document.createElement("span");
    span1.textContent = "Фамилия";
    const span2 = document.createElement("span");
    span2.textContent = "*";
    span2.classList.add("star");
    label1.append(span1);
    label1.append(span2);
    div5.append(label1);

    const div6 = document.createElement("div");
    div6.classList.add("inputs__row");
    const input2 = document.createElement("input");
    input2.classList.add("data", "data--input");
    input2.id = "first-name-new";
    input2.type = "text";
    input2.name = "name";
    div6.append(input2);

    const label2 = document.createElement("label");
    label2.classList.add("form__label");
    label2.setAttribute("for", "first-name-new");
    const span3 = document.createElement("span");
    span3.textContent = "Имя";
    const span4 = document.createElement("span");
    span4.textContent = "*";
    span4.classList.add("star");
    label2.append(span3);
    label2.append(span4);
    div6.append(label2);

    const div7 = document.createElement("div");
    div7.classList.add("inputs__row");
    const input3 = document.createElement("input");
    input3.classList.add("data", "data--input");
    input3.id = "father-name-new";
    input3.type = "text";
    input3.name = "lastName";
    div7.append(input3);
    const label3 = document.createElement("label");
    label3.classList.add("form__label");
    label3.setAttribute("for", "father-name-new");
    label3.textContent = "Отчество";
    div7.append(label3);

    div4.append(div5);
    div4.append(div6);
    div4.append(div7);
    div3.append(div4);
    form.append(div3);

    const div8 = document.createElement("div");
    div8.classList.add("wrapper-for-contacts");
    form.append(div8);

    const btnAddContact = document.createElement("button");
    btnAddContact.classList.add("btn", "btn--add");
    btnAddContact.id = "contact-add-new";
    btnAddContact.textContent = "Добавить контакт";
    form.append(btnAddContact);

    const btn4 = document.createElement("button");
    btn4.classList.add("btn", "btn--purple");
    btn4.id = "save-client-new";
    btn4.type = "submit";
    btn4.textContent = "Сохранить";
    form.append(btn4);

    const btn5 = document.createElement("button");
    btn5.classList.add("gray-text", "gray-text--black", "effect");
    btn5.id = "abolish-new-client";
    btn5.textContent = "Отмена";
    form.append(btn5);
    div2.append(form);
    body[0].append(div1);
    return div1;
  }

  // Создает окно изменить клиента
  function createWindowChangeClient() {
    const div1 = document.createElement("div");
    div1.classList.add("black-wrapper", "changes");
    const divBlock = document.createElement("div");
    divBlock.classList.add("modal-block");
    div1.append(divBlock);

    const div2 = document.createElement("div");
    div2.classList.add("modal-window");

    const btn1 = document.createElement("button");
    btn1.classList.add("close");
    div2.append(btn1);
    div1.append(div2);

    const form = document.createElement("form");
    form.action = "POST";
    form.classList.add("form", "form__change");

    const div3 = document.createElement("div");
    div3.classList.add("modal-window__wrapper");

    const h2 = document.createElement("h2");
    h2.classList.add("title", "form__title");
    h2.textContent = "Изменить данные";
    const spanID = document.createElement("span");
    spanID.classList.add("gray-text", "title-pl");
    spanID.id = "change-id";
    h2.append(spanID);
    div3.append(h2);

    const div4 = document.createElement("div");
    div4.classList.add("inputs", "inputs--gap");

    const div5 = document.createElement("div");
    div5.classList.add("inputs__row");

    const label1 = document.createElement("label");
    label1.classList.add("inputs__label");
    label1.setAttribute("for", "last-name");
    const span1 = document.createElement("span");
    span1.textContent = "Фамилия";
    const span2 = document.createElement("span");
    span2.textContent = "*";
    span2.classList.add("star");
    label1.append(span1);
    label1.append(span2);

    const input1 = document.createElement("input");
    input1.classList.add("data", "data--input");
    input1.id = "last-name";
    input1.type = "text";
    input1.name = "surname";
    div5.append(label1);
    div5.append(input1);

    const div6 = document.createElement("div");
    div6.classList.add("inputs__row");
    const label2 = document.createElement("label");
    label2.classList.add("inputs__label");
    label2.setAttribute("for", "first-name");
    const span3 = document.createElement("span");
    span3.textContent = "Имя";
    const span4 = document.createElement("span");
    span4.textContent = "*";
    span4.classList.add("star");
    label2.append(span3);
    label2.append(span4);

    const input2 = document.createElement("input");
    input2.classList.add("data", "data--input");
    input2.id = "first-name";
    input2.type = "text";
    input2.name = "name";
    div6.append(label2);
    div6.append(input2);

    const div7 = document.createElement("div");
    div7.classList.add("inputs__row");
    const label3 = document.createElement("label");
    label3.classList.add("inputs__label");
    label3.setAttribute("for", "father-name");
    label3.textContent = "Отчество";

    const input3 = document.createElement("input");
    input3.classList.add("data", "data--input");
    input3.id = "father-name";
    input3.type = "text";
    input3.name = "lastName";
    div7.append(label3);
    div7.append(input3);

    div4.append(div5);
    div4.append(div6);
    div4.append(div7);
    div3.append(div4);
    form.append(div3);

    const div8 = document.createElement("div");
    div8.classList.add("wrapper-for-contacts");
    form.append(div8);

    const btnAddContact = document.createElement("button");
    btnAddContact.classList.add("btn", "btn--add");
    btnAddContact.id = "contact-add-changes";
    btnAddContact.textContent = "Добавить контакт";
    form.append(btnAddContact);

    const btn4 = document.createElement("button");
    btn4.classList.add("btn", "btn--purple");
    btn4.id = "save-client-changes";
    btn4.type = "submit";
    btn4.textContent = "Сохранить";
    form.append(btn4);

    const btn5 = document.createElement("button");
    btn5.classList.add("gray-text", "gray-text--black", "effect");
    btn5.id = "delete-client-changes";
    btn5.textContent = "Удалить клиента";
    form.append(btn5);
    div2.append(form);
    body[0].append(div1);
    return div1;
  }

  // Создает ячейку с контактами
  function contactsCreateInRow(objCont) {
    if (objCont === undefined) {
      return;
    }
    const ul = document.createElement("ul");
    ul.classList.add("contacts-list", "list-reset");

    function create(obj) {
      for (position of obj) {
        let svgElem = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        svgElem.setAttribute("viewBox", "0 0 16 16");
        svgElem.setAttribute("height", "16");
        svgElem.setAttribute("width", "16");
        let useElem = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use"
        );
        useElem.classList.add("contacts-effect");

        const li = document.createElement("li");
        li.classList.add("contacts-list__item");
        li.tabIndex = 0;
        const div = document.createElement("div");
        div.classList.add("label");
        div.textContent = position.type + ": " + position.value;
        li.append(div);

        switch (position.type) {
          case "Vk":
            useElem.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "xlink:href",
              "sprite.svg#vk"
            );
            svgElem.appendChild(useElem);
            li.append(svgElem);
            ul.append(li);
            break;
          case "Facebook":
            useElem.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "xlink:href",
              "sprite.svg#fb"
            );
            svgElem.appendChild(useElem);
            li.append(svgElem);
            ul.append(li);
            break;
          case "Email":
            useElem.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "xlink:href",
              "sprite.svg#mail"
            );
            svgElem.appendChild(useElem);
            li.append(svgElem);
            ul.append(li);
            break;
          case "Телефон":
            useElem.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "xlink:href",
              "sprite.svg#phone"
            );
            svgElem.appendChild(useElem);
            li.append(svgElem);
            ul.append(li);
            break;
          case "Доп. телефон":
            useElem.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "xlink:href",
              "sprite.svg#extra"
            );
            svgElem.appendChild(useElem);
            li.append(svgElem);
            ul.append(li);
            break;
        }
      }
    }

    let countElem = objCont.length;
    if (countElem <= 4) {
      create(objCont);
    } else {
      create(objCont.slice(0, 4));
      const countBTN = document.createElement("button");
      countBTN.classList.add("count-contacts");
      countBTN.textContent = `+${countElem - 4}`;
      const li = document.createElement("li");
      li.classList.add("contacts-list__item");
      li.append(countBTN);
      ul.append(li);

      countBTN.addEventListener("click", function (e) {
        e.preventDefault();
        countBTN.parentNode.remove();
        create(objCont.slice(4));
      });
    }
    return ul;
  }

  // Создает ячейки с датами в таблице
  function createDateTimeInRow() {
    const spanDate = document.createElement("span");
    spanDate.classList.add("table__data--date");

    const spanTime = document.createElement("span");
    spanTime.classList.add("data", "table__data--time");
    return [spanDate, spanTime];
  }

  // Функция удаляет с сервере запись одного клиента
  async function deleteOneClient(clientID) {
    const response = await fetch(
      `http://localhost:3000/api/clients/${clientID}`,
      {
        method: "DELETE",
      }
    );

    const answer = checkResponse(response);
    if (answer === true) {
      return true;
    } else {
      return answer;
    }
  }

  // Функция изменяет запись одного клиента
  async function changeOneClient(clientID, oneClient) {
    const response = await fetch(
      `http://localhost:3000/api/clients/${clientID}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: oneClient.name,
          surname: oneClient.surname,
          lastName: oneClient.lastName,
          contacts: oneClient.contacts,
        }),
      }
    );
    const data = await response.json();
    const answer = checkResponse(response);
    if (answer === true) {
      return data;
    } else {
      return answer;
    }
  }

  //Удаляет клиента из массива
  function deleteClientInArr(objClient) {
    const ID = objClient.id;
    for (i in updateList) {
      if (updateList[i].id == ID) {
        updateList.splice(i, 1);
      }
    }
  }

  // Заполняет форму изменить клиента
  function fillChangeForm(objClient) {
    const changeWindow = createWindowChangeClient();
    const devideName = objClient.name;
    const changeForm = document.getElementsByClassName("form__change");
    const wrap = document.getElementsByClassName("wrapper-for-contacts");
    const setID = document.getElementById("change-id");
    const btnClose = document.getElementsByClassName("close");
    const deleteBtn = document.getElementById("delete-client-changes");
    const addContacts = document.getElementById("contact-add-changes");
    const saveChanges = document.getElementById("save-client-changes");

    changeForm[0][0].value = devideName.split(" ")[0];
    changeForm[0][1].value = devideName.split(" ")[1];
    changeForm[0][2].value = devideName.split(" ")[2];
    setID.textContent = `ID: ${objClient.id}`;

    const count = objClient.contacts.length;
    for (let i = 0; i < count; i++) {
      let oneContact = objClient.contacts[i];
      createNewContact(wrap);
      const choose = document.getElementsByClassName("choose-contacts");
      const inputSet = choose[i].getElementsByClassName(
        "choose-contacts__input"
      );
      inputSet[0].value = oneContact.value;

      const contactsAll = [
        "Доп. телефон",
        "Email",
        "Vk",
        "Facebook",
        "Телефон",
      ];
      let makeArray = getValue(contactsAll);
      let number = 0;
      for (let j = 0; j < 5; j++) {
        let oneValue = makeArray.next().value;
        if (oneValue === oneContact.type) {
          const btn = choose[i].getElementsByClassName("select");
          btn[0].textContent = oneValue;
          btn[0].value = oneValue;
        } else {
          let hiddenBtn = choose[i].getElementsByClassName("btn-hidden");
          hiddenBtn[number].textContent = oneValue;
          hiddenBtn[number].value = oneValue;
          number++;
        }
      }
    }

    let heightWindow = parseInt(getComputedStyle(wrap[0]).height);
    if (heightWindow >= 210) {
      wrap[0].classList.add("mask");
    }

    let errorInputs = document.getElementsByClassName("data--input");
    for (let q = 0; q < 2; q++) {
      errorInputs[q].addEventListener("input", function () {
        let checkError =
          errorInputs[q].parentElement.getElementsByClassName("error");
        if (checkError.length > 0) {
          checkError[0].remove();
        }
      });
    }

    changeWindow.addEventListener("click", (e) => {
      if (e.target === changeWindow) {
        redo(changeWindow);
      }
    });

    btnClose[0].addEventListener("click", function () {
      redo(changeWindow);
      window.history.pushState(null, null, window.location.href.split("#")[0]);
    });

    deleteBtn.addEventListener("click", async function (e) {
      e.preventDefault();
      deleteClientInArr(objClient);
      redo(changeWindow);
      await deleteOneClient(objClient.id);
      window.history.pushState(null, null, window.location.href.split("#")[0]);
    });

    addContacts.addEventListener("click", function (e) {
      e.preventDefault();
      checkCountContacts(wrap, addContacts);
    });

    saveChanges.addEventListener("click", async function (e) {
      e.preventDefault();
      const form = document.getElementsByClassName("form__change");
      let checkResult = checkForm(form[0], (nameClass = "inputs__label"));
      let oneChangeClient = {};

      if (checkResult !== false) {
        oneChangeClient.surname = checkResult[0][0];
        oneChangeClient.name = checkResult[0][1];
        oneChangeClient.lastName = changeForm[0][2].value;
        oneChangeClient.contacts = checkResult[1];

        const client = await changeOneClient(objClient.id, oneChangeClient);
        if (typeof client === "string") {
          if (
            saveChanges.previousElementSibling.className !== "error-response"
          ) {
            createErrorResponse(client, saveChanges);
          }
        } else {
          document.getElementsByClassName("modal-block")[0].style.display =
            "block";
          saveChanges.classList.add("btn-block");
          const newClient = makeObject(client);
          deleteClientInArr(objClient);
          updateList.push(newClient);
          redo(changeWindow);
          window.history.pushState(
            null,
            null,
            window.location.href.split("#")[0]
          );
        }
      }
    });
  }

  //  Создает одну строку данных в таблице
  function createRowTable(objClient) {
    const tr = document.createElement("tr");
    tr.classList.add("body__row");
    tr.id = objClient.id;

    const tdID = document.createElement("td");
    tdID.classList.add("gray-text");
    tdID.textContent = objClient.id;
    tr.append(tdID);

    for (let i = 1; i < 6; i++) {
      let td = document.createElement("td");
      td.classList.add("data", "table__data");
      tr.append(td);
    }

    tr.children[1].textContent = objClient.name;
    const createDate = createDateTimeInRow();
    createDate[0].textContent = objClient.createDate[0];
    createDate[1].textContent = objClient.createDate[1];
    tr.children[2].append(createDate[0]);
    tr.children[2].append(createDate[1]);

    const updateDate = createDateTimeInRow();
    updateDate[0].textContent = objClient.updateDate[0];
    updateDate[1].textContent = objClient.updateDate[1];
    tr.children[3].append(updateDate[0]);
    tr.children[3].append(updateDate[1]);

    const ulContacts = contactsCreateInRow(objClient.contacts);
    tr.children[4].append(ulContacts);
    tr.children[5].classList.add("data__edit");

    const changeBTN = document.createElement("button");
    changeBTN.classList.add("data__img", "data__img--pen");
    changeBTN.textContent = "Изменить";

    const deleteBTN = document.createElement("button");
    deleteBTN.classList.add("data__img", "data__img--close");
    deleteBTN.textContent = "Удалить";

    tr.children[5].append(changeBTN);
    tr.children[5].append(deleteBTN);
    tableBody[0].append(tr);

    // Кнопка УДАЛИТЬ клиента
    deleteBTN.addEventListener("click", function () {
      const window = createWindowDelete();
      const btnCloseDelete = document.getElementById("delete-close");
      const btnAbolishDelete = document.getElementById("abolition");
      const btnWindowDelete = document.getElementById("btn-delete");

      let btnArray = [btnAbolishDelete, btnCloseDelete];
      for (let btn of btnArray) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          redo(window);
        });
      }

      window.addEventListener("click", (e) => {
        if (e.target === window) {
          redo(window);
        }
      });

      btnWindowDelete.addEventListener("click", async function () {
        const client = await deleteOneClient(objClient.id);
        if (typeof client === "string") {
          if (
            btnWindowDelete.previousElementSibling.className !==
            "error-response"
          ) {
            createErrorResponse(client, btnWindowDelete);
          }
        } else {
          document.getElementsByClassName("modal-block")[0].style.display =
            "block";
          btnWindowDelete.classList.add("btn-block");
          deleteClientInArr(objClient);
          redo(window);
        }
      });
    });

    // Кнопка ИЗМЕНИТЬ клиента
    changeBTN.addEventListener("click", function () {
      window.location.hash = objClient.id;
    });
  }

  // Отрисовка всей таблицы
  function createAllTable(clientArr) {
    for (let position of clientArr) {
      createRowTable(position);
    }
  }

  // Функция очищает отрисованную таблицу
  function cleanTable() {
    let allRow = document.getElementsByClassName("body__row");
    let count = allRow.length - 1;
    while (count !== -1) {
      allRow[count].remove();
      count--;
    }
  }

  // Корректирует формат даты
  function correctDate(param) {
    if (param.length === 1) {
      return "0" + param;
    } else {
      return param;
    }
  }

  // Создает дату и время для ввода в таблицу
  function makeDateTime(obj) {
    const dateCreate = new Date(obj);
    const month = String(dateCreate.getMonth() + 1);
    const fullDate = `${dateCreate.getDate()}.${correctDate(
      month
    )}.${dateCreate.getFullYear()}`;
    const fullTime = `${correctDate(
      String(dateCreate.getHours())
    )}:${correctDate(String(dateCreate.getMinutes()))}`;
    return [fullDate, fullTime];
  }

  // Создает один объект клиента
  function makeObject(oneClient) {
    const objectClient = {
      id: oneClient.id,
      name: `${oneClient.surname} ${oneClient.name} ${oneClient.lastName}`,
      createDate: makeDateTime(oneClient.createdAt),
      updateDate: makeDateTime(oneClient.updatedAt),
      contacts: oneClient.contacts,
    };
    return objectClient;
  }

  // Генератор
  function* getValue(Arr) {
    for (let elem of Arr) {
      yield elem;
    }
  }

  // Создает поле ввода нового контакта
  function createNewContact(wrapper) {
    wrapper[0].style.display = "flex";
    let div1 = document.createElement("div");
    div1.classList.add("choose-contacts");

    const button = document.createElement("button");
    button.classList.add("select", "gray-text");
    button.value = "Телефон";
    button.textContent = "Телефон";
    div1.append(button);

    const ul = document.createElement("ul");
    ul.classList.add("list-reset", "list-select");

    const contactsArr = ["Доп. телефон", "Email", "Vk", "Facebook"];
    let valueContact = getValue(contactsArr);
    for (let i = 1; i < 5; i++) {
      let li = document.createElement("li");
      li.classList.add("list-select__item");

      let values = valueContact.next().value;
      let btn2 = document.createElement("button");
      btn2.textContent = values;
      btn2.value = values;
      btn2.classList.add("btn-hidden", "gray-text");

      li.append(btn2);
      ul.append(li);
    }
    div1.append(ul);

    let input2 = document.createElement("input");
    input2.classList.add("choose-contacts__input");
    input2.type = "text";
    if (window.innerWidth < 400) {
      input2.placeholder = "Введите данные";
    } else {
      input2.placeholder = "Введите данные контакта";
    }
    div1.append(input2);
    wrapper[0].append(div1);

    input2.addEventListener("click", function () {
      if (ul.style.display === "flex") {
        ul.style.display = "none";
        button.classList.toggle("select-rotate");
      }
    });

    let btn = document.createElement("button");
    btn.classList.add("delete-contact");
    input2.addEventListener("input", function () {
      if (input2.value.trim().length > 0) {
        if (div1.childElementCount < 5) {
          div1.append(btn);
        }
      } else {
        const hasBTN =
          input2.parentNode.getElementsByClassName("delete-contact");
        if (hasBTN.length === 1) {
          hasBTN[0].remove();
        }
      }

      const hasError = input2.parentNode.getElementsByClassName("error");
      if (hasError.length === 1) {
        hasError[0].remove();
      }
    });

    if (div1.hasChildNodes(btn)) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        div1.remove();
        if (wrapper[0].childElementCount === 0) {
          wrapper[0].style.display = "none";
          document
            .getElementsByClassName("btn--add")[0]
            .classList.remove("pb-25");
        }
        let heightWindow = parseInt(getComputedStyle(wrapper[0]).height);
        if (heightWindow < 210) {
          wrapper[0].classList.remove("mask");
        }

        const btnAddContact = document.getElementsByClassName("btn--add");
        btnAddContact[0].style.display = "initial";
      });
    }

    button.addEventListener("click", function (e) {
      e.preventDefault();
      if (ul.style.display === "flex") {
        ul.style.display = "none";
      } else {
        ul.style.display = "flex";
      }
      button.classList.toggle("select-rotate");
    });

    let hiddenBTN = ul.getElementsByClassName("btn-hidden");
    for (let j = 0; j < 4; j++) {
      hiddenBTN[j].addEventListener("click", function (e) {
        e.preventDefault();
        let clickBTN1 = hiddenBTN[j].textContent;
        let mainBTN = ul.previousElementSibling;
        let temporary = mainBTN.textContent;

        mainBTN.textContent = clickBTN1;
        mainBTN.value = clickBTN1;
        hiddenBTN[j].textContent = temporary;
        hiddenBTN[j].value = temporary;
        ul.style.display = "none";
        button.classList.toggle("select-rotate");
      });
    }
  }

  // Функция получает с сервера все записи(если они есть)
  async function getAllClients() {
    const response = await fetch("http://localhost:3000/api/clients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }

  // Проверяет статус ответов от сервера
  function checkResponse(response) {
    if (response.status == 200 || response.status == 201) {
      return true;
    } else {
      if (
        response.status == 404 ||
        response.status == 422 ||
        response.status >= 500
      ) {
        return response.statusText;
      } else {
        return "Что-то пошло не так...";
      }
    }
  }

  // Функция создает на сервере запись одного клиента
  async function createOneClient(oneClient) {
    const response = await fetch("http://localhost:3000/api/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: oneClient.name,
        surname: oneClient.surname,
        lastName: oneClient.lastName,
        contacts: oneClient.contacts,
      }),
    });
    const data = await response.json();
    const answer = checkResponse(response);
    if (answer === true) {
      return data;
    } else {
      return answer;
    }
  }

  // Функция получает с сервера запись клиента по id
  async function getClientID(clientID) {
    const response = await fetch(
      `http://localhost:3000/api/clients/${clientID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  }

  // Проверка введенного имени
  function checkName(form, name) {
    let nameArr = [];
    let trueCount = 0;
    for (let i = 0; i < 2; i++) {
      if (form[i].value.trim().length === 0) {
        const label = document.getElementsByClassName(name);
        let exist = label[i].getElementsByClassName("error");

        if (exist.length === 0) {
          const error = document.createElement("span");
          error.classList.add("error");
          if (name === "inputs__label") {
            error.classList.add("error-change");
          }
          label[i].append(error);
        }
      } else {
        trueCount++;
        nameArr.push(form[i].value.trim());
      }
    }
    if (trueCount === 2) {
      return nameArr;
    }
  }

  // Проверка введенных контактов
  function checkContacts() {
    let contactsInput = document.getElementsByClassName(
      "choose-contacts__input"
    );
    let count = contactsInput.length;
    let trueCount = 0;
    let contactsArr = [];

    if (count > 0) {
      for (let j = 0; j < count; j++) {
        const lenghthInput = contactsInput[j].value.trim().length;
        if (lenghthInput === 0) {
          if (contactsInput[j].nextSibling === null) {
            const error1 = document.createElement("span");
            error1.classList.add("error", "error-contact");
            contactsInput[j].parentNode.append(error1);
          }
        } else {
          trueCount++;
          let contactObj = {
            type: contactsInput[j].parentNode.getElementsByClassName(
              "select"
            )[0].value,
            value: contactsInput[j].value.trim(),
          };
          contactsArr.push(contactObj);
        }
      }
    }
    if (trueCount === count) {
      return contactsArr;
    }
  }

  // Полная проверка формы
  function checkForm(form, nameClass) {
    let res1 = checkName(form, nameClass);
    let res2 = checkContacts();
    if (Array.isArray(res1) === true && Array.isArray(res2) === true) {
      return [res1, res2];
    } else {
      return false;
    }
  }

  // Проверяет количество контактов и меняет стили
  function checkCountContacts(contacts, btn) {
    if (contacts[0].childElementCount <= 9) {
      btn.classList.add("pb-25");
      contacts[0].style.display = "none";
      createNewContact(contacts);

      let heightWindow = parseInt(getComputedStyle(contacts[0]).height);
      if (heightWindow >= 210) {
        contacts[0].classList.add("mask");
      }
    }
    if (contacts[0].childElementCount === 10) {
      btn.style.display = "none";
    }
  }

  // Добавляет элемент с сообщением ошибки от сервера
  function createErrorResponse(message, btn) {
    const p = document.createElement("p");
    p.classList.add("error-response");
    p.textContent = message;
    btn.before(p);
  }

  // Работа в окне ДОБАВИТЬ клиента
  function workInAddClientWindow(modalWindow) {
    const btnCloseClient = document.getElementById("new-client__close");
    const saveClient = document.getElementById("save-client-new");
    const btnAbolish = document.getElementById("abolish-new-client");
    const btnAddContact = document.getElementById("contact-add-new");
    const form = document.getElementById("form-new-client");
    const contacts = document.getElementsByClassName("wrapper-for-contacts");

    for (let i = 0; i < 3; i++) {
      form[i].addEventListener("input", function () {
        form[i].nextElementSibling.style.display = "none";
        if (form[i].value.length === 0) {
          form[i].nextElementSibling.style.display = "initial";
        }
      });
    }

    modalWindow.addEventListener("click", (e) => {
      if (e.target === modalWindow) {
        redo(modalWindow);
      }
    });

    let btnArr = [btnCloseClient, btnAbolish];
    for (let btn of btnArr) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        redo(modalWindow);
      });
    }

    btnAddContact.addEventListener("click", function (e) {
      e.preventDefault();
      checkCountContacts(contacts, btnAddContact);
    });

    saveClient.addEventListener("click", async function (e) {
      e.preventDefault();

      let checkResult = checkForm(form, (nameClass = "form__label"));
      let oneClient = {};

      if (checkResult !== false) {
        oneClient.surname = checkResult[0][0];
        oneClient.name = checkResult[0][1];
        oneClient.lastName = form[2].value;
        oneClient.contacts = checkResult[1];

        const client = await createOneClient(oneClient);
        if (typeof client === "string") {
          if (
            saveClient.previousElementSibling.className !== "error-response"
          ) {
            createErrorResponse(client, saveClient);
          }
        } else {
          document.getElementsByClassName("modal-block")[0].style.display =
            "block";
          saveClient.classList.add("btn-block");
          const newClient = makeObject(client);
          updateList.push(newClient);
          redo(modalWindow);
        }
      }
    });
  }

  // Сортировка таблицы по номеру и ФИО
  function sortTable(property, i, arr) {
    if (i % 2 !== 0) {
      arr.sort((a, b) => (a[property] > b[property] ? 1 : -1));
    } else {
      arr.sort((a, b) => (b[property] < a[property] ? -1 : 1));
    }
  }

  // Сортировка таблицы по дате
  function dateSort(property, i, arr) {
    arr.sort(function (a, b) {
      let pattern1 = a[property][0].split(".");
      let pattern2 = a[property][1].split(":");
      let date1 = new Date(
        pattern1[2],
        pattern1[1] - 1,
        pattern1[0],
        pattern2[0],
        pattern2[1]
      );

      let pattern3 = b[property][0].split(".");
      let pattern4 = b[property][1].split(":");
      let date2 = new Date(
        pattern3[2],
        pattern3[1] - 1,
        pattern3[0],
        pattern4[0],
        pattern4[1]
      );

      let direcStatus = i % 2 === 0 ? date1 < date2 : date1 > date2;
      if (direcStatus == true) {
        return -1;
      }
    });
  }

  // Создает блок для результатов поиска
  function createSearchWindow(wrap) {
    const div = document.createElement("div");
    div.classList.add("search");
    const ul = document.createElement("ul");
    ul.classList.add("list-reset", "search-list");
    ul.tabIndex = 0;
    div.append(ul);
    wrap[0].append(div);
  }

  // Выдает результаты поиска
  async function getSearchResult() {
    let search = document.getElementById("search-input");
    let ClientsDB = await getAllClients();
    for (client of ClientsDB) {
      const allWords = [
        client.name,
        client.lastName,
        client.surname,
        client.id,
      ];

      for (let word of allWords.slice(0, 3)) {
        let DBValue = word.toLowerCase();
        let inputValue = search.value.trim().toLowerCase();

        if (inputValue.length > 0) {
          const listSearch = document.getElementsByClassName("search-list");
          if (DBValue.startsWith(inputValue)) {
            const li = document.createElement("li");
            li.classList.add("search__elem");
            li.tabIndex = 0;
            li.textContent = DBValue;
            listSearch[0].append(li);

            li.addEventListener("keypress", function (e) {
              if (e.keyCode === 13) {
                e.preventDefault();
                li.click();
              }
            });

            li.addEventListener("click", function () {
              const chooseID = allWords.slice(3);
              const trID = document.getElementById(chooseID[0]);
              trID.classList.add("find");
              trID.scrollIntoView({
                behavior: "smooth",
              });
              document.getElementsByClassName("search")[0].remove();
              document.getElementsByClassName("search-delete")[0].remove();
              search.value = "";
            });
          }
        }
      }
    }
  }

  // Анализируется хэш
  async function analyseHash() {
    const hashID = window.location.hash;
    if (hashID !== "") {
      const dataFromDB = await getClientID(hashID.slice(1));
      const prepareDate = makeObject(dataFromDB);
      fillChangeForm(prepareDate);
    }
  }

  async function start() {
    window.onload = function () {
      document.getElementsByClassName("total-block")[0].classList.add("loaded");
    };

    analyseHash();

    const allClientsDB = await getAllClients();
    if (allClientsDB.length > 0) {
      for (oneClient of allClientsDB) {
        let elem = makeObject(oneClient);
        updateList.push(elem);
      }
      updateList.sort((a, b) => a.id - b.id);
      createAllTable(updateList);
    }

    // Кнопка ДОБАВИТЬ клиента
    const btnClient = document.getElementById("addClient");
    btnClient.addEventListener("click", function () {
      const windNew = createWindowNewClient();
      workInAddClientWindow(windNew);
    });

    let counterArr = [1, 0, 0, 0, "Я-А"];

    // Кнопка сортировка по ID
    let btnID = document.getElementById("ID");
    btnID.addEventListener("click", function () {
      btnID.classList.toggle("arrow-click");
      counterArr[0] += 1;
      sortTable("id", counterArr[0], updateList);
      cleanTable();
      createAllTable(updateList);
    });

    // Кнопка сортирока по ФИО
    let btnName = document.getElementById("NameClient");
    btnName.addEventListener("click", function () {
      btnName
        .getElementsByClassName("arrow")[0]
        .classList.toggle("arrow--name");
      let perm = btnName.getElementsByClassName("sort")[0].textContent;
      btnName.getElementsByClassName("sort")[0].textContent = counterArr[4];
      counterArr[1] += 1;
      counterArr[4] = perm;
      sortTable("name", counterArr[1], updateList);
      cleanTable();
      createAllTable(updateList);
    });

    // Кнопка сортировка по дате создания
    let btnDateCreate = document.getElementById("DateCreate");
    btnDateCreate.addEventListener("click", async function () {
      btnDateCreate.classList.toggle("arrow--date");
      counterArr[2] += 1;
      dateSort("createDate", counterArr[2], updateList);
      cleanTable();
      createAllTable(updateList);
    });

    // Кнопка сортирока по дате изменения
    let btnDateChange = document.getElementById("DateChange");
    btnDateChange.addEventListener("click", function () {
      btnDateChange.classList.toggle("arrow--changes");
      counterArr[3] += 1;
      dateSort("updateDate", counterArr[3], updateList);
      cleanTable();
      createAllTable(updateList);
    });

    window.addEventListener("hashchange", async function (e) {
      e.preventDefault();
      analyseHash();
    });

    // Поисковой запрос
    let search = document.getElementById("search-input");

    search.addEventListener("input", async function () {
      const wrap = document.getElementsByClassName("input-wrap");
      const windowSearch = document.getElementsByClassName("search");

      let allLI = document.getElementsByClassName("search__elem");
      for (let li of allLI) {
        li.remove();
      }

      if (wrap[0].getElementsByClassName("search").length === 0) {
        const btnDelete = document.createElement("button");
        btnDelete.classList.add("search-delete");
        wrap[0].append(btnDelete);
        createSearchWindow(wrap);

        btnDelete.addEventListener("click", function () {
          windowSearch[0].remove();
          btnDelete.remove();
          search.value = "";
        });
      } else {
        let allLI = document.getElementsByClassName("search__elem");
        for (let li of allLI) {
          li.remove();
        }
      }

      if (search.value.trim().length === 0) {
        windowSearch[0].remove();
        wrap[0].getElementsByClassName("search-delete")[0].remove();
      }

      let bgSearch = document.getElementsByClassName("find");
      if (bgSearch.length > 0) {
        bgSearch[0].classList.remove("find");
      }

      setTimeout(getSearchResult, 300);
    });
  }

  start();
})();
