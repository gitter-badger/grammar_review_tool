import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const response = {
  grammar: {
    content: `%name block_formal_langs_parser_cpp_language
%declare_class {class block_formal_langs_parser_cpp_language}

/* COMMENTS */

comment_list(R) ::= comment_list(A) COMMENT(B) .  {
    A->add_child(B);
    R = A;
}

comment_list(R) ::= COMMENT(A) . {
     R = $this->create_node('comment_list', array( A ));
}`,
    name: 'grammar name',
    owner: 1,
  },
  comments: {
    2: [
      {
        content: 'comment1',
        user: 1,
      },
    ],
    6: [
      {
        content: 'comment2',
        user: 1,
      },
      {
        content: 'comment3',
        user: 2,
      },
    ],
  },
  users: {
    1: {
      name: 'melihovv',
    },
    2: {
      name: 'some guy',
    },
  },
};

Vue.http.interceptors.unshift((request, next) => {
  next(request.respondWith(JSON.stringify(response), {status: 200}));
});
