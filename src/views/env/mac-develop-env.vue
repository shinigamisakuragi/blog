<template>
    <div>
        <p>shell</p>
        <p>查看已有shells</p>
        <pre>cat /etc/shells</pre>

        <p>查看当前shell</p>
        <pre>echo $SHELL</pre>

        <p>切换到zsh</p>
        <pre>chsh -s /bin/zsh</pre>

        <p>oh-my-zsh</p>
        <p>
            主题目录 # ~/.oh-my-zsh/themes/ <code>af-magic</code> <code>simple</code>
        </p>
        <p>
            插件目录 # ~/.oh-my-zsh/plugins/ <code>osx</code> <code>git</code> <code>symfony2</code> <code>brew</code>
        </p>

        <p>配置文件目录</p>
        <pre>~/.zshrc</pre>

        <p>应用配置</p>
        <pre>source ~/.zshrc</pre>


        <a href="https://github.com/shinigamisakuragi/mac-dev-env/blob/master/brew.sh">Homebrew</a>

        <p>安装php</p>
        <pre>brew install php@7.1</pre>

        <p>启动关闭PHP</p>

        <pre>
            sudo php71-fpm start
            sudo php71-fpm stop
        </pre>

        <pre>
            brew services start php@7.1
            brew services stop php@7.1
            brew services restart php@7.1
        </pre>

        <p>安装Nginx</p>
        <pre>brew install nginx</pre>

        <p>建立项目目录、虚拟主机配置目录及nginx日志存放目录</p>
        <pre>
            sudo mkdir -p /var/www
            sudo chown root:staff /var/www
            sudo chmod g+w /var/www
            sudo mkdir -p /var/log/nginx
            mkdir /usr/local/etc/nginx/servers
        </pre>

        <p>修改nginx配置文件 <code>/usr/local/etc/nginx/nginx.conf</code></p>

        <pre>
            user  nobody;
            worker_processes  1;

            error_log  /var/log/nginx/error.log debug;
            pid        /var/run/nginx.pid;

            events {
                worker_connections  1024;
            }

            http {
                include       mime.types;
                default_type  application/octet-stream;

                log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                                  '$status $body_bytes_sent "$http_referer" '
                                  '"$http_user_agent" "$http_x_forwarded_for"';

                access_log  /var/log/nginx/access.log  main;
                error_log  /var/log/nginx/error.log;

                sendfile        on;
                keepalive_timeout  65;
                client_max_body_size   1024m;

                server {
                    listen       80;
                    server_name  localhost;
                    root         /var/www;
                    charset      utf-8;

                    access_log  logs/host.access.log  main;

                    location / {
                        autoindex on;
                        index  index.html index.htm index.php;
                    }

                    location ~ \.php$ {
                        fastcgi_pass   127.0.0.1:9000;
                        fastcgi_index  index.php;
                        fastcgi_split_path_info ^(.+\.php)(/.*)$;
                        include        fastcgi_params;
                        fastcgi_param  SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
                    }

                }

                include servers/*;
            }
        </pre>

        <p>启动、重启及关闭nginx</p>
        <pre>
            sudo nginx
            sudo nginx -s reload
            sudo nginx -s stop
        </pre>

        <pre>
            brew services start nginx
            brew services stop nginx
            brew services restart nginx
        </pre>

        <p>安装Mysql</p>
        <pre>brew install mysql@5.6</pre>

        <p>启动关闭mysql <small>需要将mysql可执行文件放到bin目录</small></p>
        <pre>
            mysql.server start
            mysql.server stop
        </pre>

        <pre>
            brew services start mysql@5.6
            brew services stop mysql@5.6
            brew services restart mysql@5.6
        </pre>

        <p>配置 npm、yarn 源为国内源</p>
        <pre>
            npm config set registry https://registry.npm.taobao.org
            yarn config set registry https://registry.npm.taobao.org
        </pre>

        <p>配置ssh一键登录脚本 <small>放到bin目录下，应用bash。</small></p>
        <pre>
            #!/usr/bin/expect
            spawn ssh -p[PORT] [IP]
            expect "*password:"
            send "[PASSWORD]\r"
            expect "*#"
            interact
        </pre>
    </div>
</template>

<script>
    export default {
        name: "mac-develop-env"
    }
</script>

<style scoped>

</style>