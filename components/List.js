import React from 'react';
import Link from 'next/link';
import { List, Breadcrumb } from "antd";
import { CalendarOutlined, FolderOutlined, FireOutlined } from "@ant-design/icons";

import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

import '../styles/components/list.css';

const MyList = ({ data }) => {

    const renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });

    return (
        <div>
            <div className="bread-div">
                <Breadcrumb>
                    <Breadcrumb.Item><a href="/">Main Page</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="/">Video Tuition</a></Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <List
                header={<div>Newest Daily</div>}
                itemLayout="vertical"
                dataSource={data.data}
                renderItem={(item) => (
                    <List.Item>
                        <Link href={{ pathname: '/detailed', query: { id: item.article_id } }}>
                            <a>
                                <div className="list-title">{item.title}</div>
                            </a>
                        </Link>
                        <div className="list-icon">
                            <span><CalendarOutlined />{item.add_time}</span>
                            <span><FolderOutlined />{item.type_name}</span>
                            <span><FireOutlined />{item.view_count}</span>
                        </div>
                        <div
                            className="list-context"
                            dangerouslySetInnerHTML={{ __html: marked(item.introduction) }}></div>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default MyList;