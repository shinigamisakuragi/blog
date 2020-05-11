(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230301"],{eae4:function(e,n,s){"use strict";s.r(n);var r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},t=[function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",[s("p",[e._v("shell")]),s("p",[e._v("查看已有shells")]),s("pre",[e._v("cat /etc/shells")]),s("p",[e._v("查看当前shell")]),s("pre",[e._v("echo $SHELL")]),s("p",[e._v("切换到zsh")]),s("pre",[e._v("chsh -s /bin/zsh")]),s("p",[e._v("oh-my-zsh")]),s("p",[e._v(" 主题目录 # ~/.oh-my-zsh/themes/ "),s("code",[e._v("af-magic")]),e._v(" "),s("code",[e._v("simple")])]),s("p",[e._v(" 插件目录 # ~/.oh-my-zsh/plugins/ "),s("code",[e._v("osx")]),e._v(" "),s("code",[e._v("git")]),e._v(" "),s("code",[e._v("symfony2")]),e._v(" "),s("code",[e._v("brew")])]),s("p",[e._v("配置文件目录")]),s("pre",[e._v("~/.zshrc")]),s("p",[e._v("应用配置")]),s("pre",[e._v("source ~/.zshrc")]),s("a",{attrs:{href:"https://github.com/shinigamisakuragi/mac-dev-env/blob/master/brew.sh"}},[e._v("Homebrew")]),s("p",[e._v("安装php")]),s("pre",[e._v("brew install php@7.1")]),s("p",[e._v("启动关闭PHP")]),s("pre",[e._v("        sudo php71-fpm start\n        sudo php71-fpm stop\n    ")]),s("pre",[e._v("        brew services start php@7.1\n        brew services stop php@7.1\n        brew services restart php@7.1\n    ")]),s("p",[e._v("安装Nginx")]),s("pre",[e._v("brew install nginx")]),s("p",[e._v("建立项目目录、虚拟主机配置目录及nginx日志存放目录")]),s("pre",[e._v("        sudo mkdir -p /var/www\n        sudo chown root:staff /var/www\n        sudo chmod g+w /var/www\n        sudo mkdir -p /var/log/nginx\n        mkdir /usr/local/etc/nginx/servers\n    ")]),s("p",[e._v("修改nginx配置文件 "),s("code",[e._v("/usr/local/etc/nginx/nginx.conf")])]),s("pre",[e._v('        user  nobody;\n        worker_processes  1;\n\n        error_log  /var/log/nginx/error.log debug;\n        pid        /var/run/nginx.pid;\n\n        events {\n            worker_connections  1024;\n        }\n\n        http {\n            include       mime.types;\n            default_type  application/octet-stream;\n\n            log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                              \'$status $body_bytes_sent "$http_referer" \'\n                              \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n            access_log  /var/log/nginx/access.log  main;\n            error_log  /var/log/nginx/error.log;\n\n            sendfile        on;\n            keepalive_timeout  65;\n            client_max_body_size   1024m;\n\n            server {\n                listen       80;\n                server_name  localhost;\n                root         /var/www;\n                charset      utf-8;\n\n                access_log  logs/host.access.log  main;\n\n                location / {\n                    autoindex on;\n                    index  index.html index.htm index.php;\n                }\n\n                location ~ \\.php$ {\n                    fastcgi_pass   127.0.0.1:9000;\n                    fastcgi_index  index.php;\n                    fastcgi_split_path_info ^(.+\\.php)(/.*)$;\n                    include        fastcgi_params;\n                    fastcgi_param  SCRIPT_FILENAME $realpath_root$fastcgi_script_name;\n                }\n\n            }\n\n            include servers/*;\n        }\n    ')]),s("p",[e._v("启动、重启及关闭nginx")]),s("pre",[e._v("        sudo nginx\n        sudo nginx -s reload\n        sudo nginx -s stop\n    ")]),s("pre",[e._v("        brew services start nginx\n        brew services stop nginx\n        brew services restart nginx\n    ")]),s("p",[e._v("安装Mysql")]),s("pre",[e._v("brew install mysql@5.6")]),s("p",[e._v("启动关闭mysql "),s("small",[e._v("需要将mysql可执行文件放到bin目录")])]),s("pre",[e._v("        mysql.server start\n        mysql.server stop\n    ")]),s("pre",[e._v("        brew services start mysql@5.6\n        brew services stop mysql@5.6\n        brew services restart mysql@5.6\n    ")]),s("p",[e._v("配置 npm、yarn 源为国内源")]),s("pre",[e._v("        npm config set registry https://registry.npm.taobao.org\n        yarn config set registry https://registry.npm.taobao.org\n    ")]),s("p",[e._v("配置ssh一键登录脚本 "),s("small",[e._v("放到bin目录下，应用bash。")])]),s("pre",[e._v('        #!/usr/bin/expect\n        spawn ssh -p[PORT] [IP]\n        expect "*password:"\n        send "[PASSWORD]\\r"\n        expect "*#"\n        interact\n    ')])])}],p={name:"mac-develop-env"},o=p,i=s("2877"),a=Object(i["a"])(o,r,t,!1,null,"b86cdb84",null);n["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d230301.663af80d.js.map