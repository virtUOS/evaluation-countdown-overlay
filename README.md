# Evaluation Countdown Overlay

JacaScript library to inject and information overlay into a demo installation.
To add the overlay to a page, inject a JavaScript snippet like this:

```html
<script id=demo-overlay
        end=1686789606
        type=text/javascript
        src=https://raw.githubusercontent.com/virtUOS/evaluation-countdown-overlay/main/countdown.js>
</script>
```

The attribute `end` specifies a Unix timestamp to count down to.


## Nginx

You can use Nginx to inject this snippet into existing projects like this:

```py
# Removing this header may be necessary if the application sends gzipped content
proxy_set_header Accept-Encoding "";

# filter the response
sub_filter_once on;
sub_filter '</head>' '<script id=demo-overlay end=1686789606 type=text/javascript src=/countdown.js></script></head>';
```
