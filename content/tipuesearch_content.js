var tipuesearch = {"pages": [{'title': 'stage1-ag3', 'text': 'Repository: \xa0 https://github.com/mdecourse/cmstemplate \n Github Pages: \xa0 https://mde.tw/cmstemplate \n 利用 cmstemplate 建立以 CMSiMDE 作為子模組的動態與靜態網站方法為: \n \n 登入 Github 帳號 \n 將瀏覽器指向 \xa0 https://github.com/mdecourse/cmstemplate \n 利用 \xa0 Use this template \xa0 按鈕建立倉儲 \n \n clone 帶有 CMSiMDE 的指令: \n \n \n \n \n \n \n 1 \n \n \n \n git clone --recurse-submodules URL \n \n \n \n \n \n \n \n 上述 URL 即為希望將倉儲資料取下進行改版的 Github 倉儲網路統一資源位置, 也就是 Github 倉儲網址. \n 每一個以 cmstemplate 為 template 的倉儲, 其根目錄都帶有: \n \n init.py \xa0 - 其中的 site_title, ip 與 port 可以讓使用者自行修改, site_title 是網站標題, ip 為動態網站啟動時所使用的網路位址, 可設為內部或外部 IPv4 (IPv6), port 則是動態網站啟動時所佔用的埠號. \n http-server.py \xa0 - 執行後會使用內建的 localhost 與 port 8444 伺服 content 子目錄中的 CMSiMDE 靜態網頁. \n cms.bat \xa0 - 讓使用者執行動態網站用的批次檔案. \n acp.bat \xa0 - 若使用者已經將倉儲設為 ssh 連線, 且提供遠端與近端的認證模式, 則可以在執行此批次指令之後加上提交字串, 即可執行 git add ., git commit -m "提交訊息", 以及 git push 等三個指令. \n \n', 'tags': '', 'url': 'stage1-ag3.html'}, {'title': '高空吊車', 'text': '\n 動機:對建造大樓的吊車感到很有趣 第二周:繪製零件 第三周:模擬路徑，修改錯誤 第四周:報告 \n', 'tags': '', 'url': '高空吊車.html'}, {'title': 'week1', 'text': '指令 \n git clone --recurse-submodules 網址.git \n 如:git clone --recurse-submodules \xa0 https://github.com/40623234-1/cd2021.git \n 影片: \n \n \n', 'tags': '', 'url': 'week1.html'}, {'title': 'week2', 'text': '1.討論設計主題 \n 2.繪製零件:用 Coppeliasim畫 \n \n', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': '程式和條件設定影片: \n \n \n', 'tags': '', 'url': 'week3.html'}, {'title': '1.設定手臂與支架的轉軸', 'text': '\n \n \n', 'tags': '', 'url': '1.設定手臂與支架的轉軸.html'}, {'title': '2.固定配重塊', 'text': '\n \n', 'tags': '', 'url': '2.固定配重塊.html'}, {'title': '3.設定滑塊', 'text': '\n', 'tags': '', 'url': '3.設定滑塊.html'}, {'title': '4.設定吊繩', 'text': '\n', 'tags': '', 'url': '4.設定吊繩.html'}, {'title': '5.設定夾爪', 'text': '\n \n \n', 'tags': '', 'url': '5.設定夾爪.html'}, {'title': '6.設定個物件的關聯', 'text': '\n', 'tags': '', 'url': '6.設定個物件的關聯.html'}, {'title': '7.程式', 'text': '\n 更改名稱 \n \n 程式: \n \n \n', 'tags': '', 'url': '7.程式.html'}, {'title': '8.成果', 'text': '\n', 'tags': '', 'url': '8.成果.html'}, {'title': 'week4報告', 'text': '', 'tags': '', 'url': 'week4報告.html'}]};