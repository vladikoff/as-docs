initSidebarItems({"fn":[["is_valid_header_value",""],["trim_string",""]],"mod":[["consts",""],["name",""]],"struct":[["Header","A single header. Headers have a name (case insensitive) and a value. The character set for header and values are both restrictive. - Names must only contain a-zA-Z0-9 and and ('!' | '#' | '$' | '%' | '&' |   ''' | '*' | '+' | '-' | '.' | '^' | '_' | '`' | '|' | '~') characters   (the field-name token production defined at   https://tools.ietf.org/html/rfc7230#section-3.2).   For request headers, we expect these to all be specified statically,   and so we panic if you provide an invalid one. (For response headers, we   ignore headers with invalid names, but emit a warning)."],["Headers","A list of headers."]]});