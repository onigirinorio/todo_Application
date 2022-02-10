import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button（完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）を未完了リストから削除して完了リストに表示
    const completeTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // button（戻す）タグ生成
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ（div）を完了リストから削除して未完了リストに表示
      const backTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);
      document.getElementById("incomplete-list").appendChild(backTarget);
      div.removeChild(backButton);
      div.appendChild(completeButton);
      div.appendChild(deleteButton);
    });

    const completeText = document.getElementById("complete-list");
    completeText.appendChild(completeTarget);
    div.removeChild(completeButton);
    div.removeChild(deleteButton);
    div.appendChild(backButton);
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    const delteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(delteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
