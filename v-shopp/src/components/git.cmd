git的安装与使用
https://git-scm.com/   
安装 命令行 或者右键 git bash here
初始化用户名和邮箱（第一次安装）
$ git config --global user.name "Your Name"  设置用户名
git config --global user.email "925722715@qq.com" 设置邮箱
初始化git仓库 在你作为仓库的文件夹（一个文件夹只用一次）
git init
添加文件到仓库
pwd 找路径  cd找到要添加的文件
get add 文件名  一个一个添加
git add -A -A表示all 添加所有 
get add .
提交文件到本地仓库
get commit -m'提交内容'
例子 git commit -m'内容'