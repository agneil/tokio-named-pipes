(function() {var implementors = {};
implementors["tokio_fs"] = [{text:"impl <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_fs/struct.File.html\" title=\"struct tokio_fs::File\">File</a>",synthetic:false,types:["tokio_fs::file::File"]},{text:"impl <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_fs/struct.Stdin.html\" title=\"struct tokio_fs::Stdin\">Stdin</a>",synthetic:false,types:["tokio_fs::stdin::Stdin"]},];
implementors["tokio_net"] = [{text:"impl&lt;E&gt; <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_net/util/struct.PollEvented.html\" title=\"struct tokio_net::util::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://docs.rs/mio/0.6.19/mio/event_imp/trait.Evented.html\" title=\"trait mio::event_imp::Evented\">Evented</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>",synthetic:false,types:["tokio_net::util::poll_evented::PollEvented"]},{text:"impl <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_net/tcp/split/struct.TcpStreamReadHalf.html\" title=\"struct tokio_net::tcp::split::TcpStreamReadHalf\">TcpStreamReadHalf</a>",synthetic:false,types:["tokio_net::tcp::split::TcpStreamReadHalf"]},{text:"impl&lt;'_&gt; <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_net/tcp/split/struct.TcpStreamReadHalfMut.html\" title=\"struct tokio_net::tcp::split::TcpStreamReadHalfMut\">TcpStreamReadHalfMut</a>&lt;'_&gt;",synthetic:false,types:["tokio_net::tcp::split::TcpStreamReadHalfMut"]},{text:"impl <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_net/tcp/struct.TcpStream.html\" title=\"struct tokio_net::tcp::TcpStream\">TcpStream</a>",synthetic:false,types:["tokio_net::tcp::stream::TcpStream"]},{text:"impl <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_net/uds/split/struct.UnixStreamReadHalf.html\" title=\"struct tokio_net::uds::split::UnixStreamReadHalf\">UnixStreamReadHalf</a>",synthetic:false,types:["tokio_net::uds::split::UnixStreamReadHalf"]},{text:"impl&lt;'_&gt; <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_net/uds/split/struct.UnixStreamReadHalfMut.html\" title=\"struct tokio_net::uds::split::UnixStreamReadHalfMut\">UnixStreamReadHalfMut</a>&lt;'_&gt;",synthetic:false,types:["tokio_net::uds::split::UnixStreamReadHalfMut"]},{text:"impl <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_net/uds/struct.UnixStream.html\" title=\"struct tokio_net::uds::UnixStream\">UnixStream</a>",synthetic:false,types:["tokio_net::uds::stream::UnixStream"]},];
implementors["tokio_process"] = [{text:"impl <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_process/struct.ChildStdout.html\" title=\"struct tokio_process::ChildStdout\">ChildStdout</a>",synthetic:false,types:["tokio_process::ChildStdout"]},{text:"impl <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_process/struct.ChildStderr.html\" title=\"struct tokio_process::ChildStderr\">ChildStderr</a>",synthetic:false,types:["tokio_process::ChildStderr"]},];
implementors["tokio_test"] = [{text:"impl <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_test/io/struct.Mock.html\" title=\"struct tokio_test::io::Mock\">Mock</a>",synthetic:false,types:["tokio_test::io::Mock"]},];
implementors["tokio_tls"] = [{text:"impl&lt;S&gt; <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_tls/struct.TlsStream.html\" title=\"struct tokio_tls::TlsStream\">TlsStream</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>",synthetic:false,types:["tokio_tls::TlsStream"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
