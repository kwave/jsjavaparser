

    test("marker annotation type", function(assert) {
      var src = multiline(function(){/*
        @interface Preliminary {}
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "Preliminary"
                    },
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

    test("marker annotation type ws semi", function(assert) {
      var src = multiline(function(){/*
        @interface Preliminary {;}
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "Preliminary"
                    },
                    bodyDeclarations: [

                    ]
                }
            ]
        }
      );
    });

    test("marker annotation type ws interface", function(assert) {
      var src = multiline(function(){/*
        @interface Preliminary { private interface ITest {}}
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "Preliminary"
                    },
                    bodyDeclarations: [
                        {
                            node: "TypeDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            interface: true,
                            name: {
                                node: "SimpleName",
                                identifier: "ITest"
                            },
                            typeParameters: [

                            ],
                            superclassType: null,
                            superInterfaceTypes: [

                            ],
                            bodyDeclarations: [

                            ]
                        }
                    ]
                }
            ]
        }
      );
    });

    test("marker annotation type ws enum", function(assert) {
      var src = multiline(function(){/*
        @interface Preliminary { private enum TestEnum {A,B}}
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "Preliminary"
                    },
                    bodyDeclarations: [
                        {
                            node: "EnumDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "TestEnum"
                            },
                            superInterfaceTypes: [

                            ],
                            enumConstants: [
                                {
                                    node: "EnumConstantDeclaration",
                                    modifiers: [

                                    ],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "A"
                                    },
                                    arguments: [

                                    ],
                                    anonymousClassDeclaration: null
                                },
                                {
                                    node: "EnumConstantDeclaration",
                                    modifiers: [

                                    ],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "B"
                                    },
                                    arguments: [

                                    ],
                                    anonymousClassDeclaration: null
                                }
                            ],
                            bodyDeclarations: [

                            ]
                        }
                    ]
                }
            ]
        }
      );
    });

    test("marker annotation type ws enum", function(assert) {
      var src = multiline(function(){/*
        @interface Preliminary { private class TestClass { final int i = 42; }}
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "Preliminary"
                    },
                    bodyDeclarations: [
                        {
                            node: "TypeDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "private"
                                }
                            ],
                            interface: false,
                            name: {
                                node: "SimpleName",
                                identifier: "TestClass"
                            },
                            typeParameters: [

                            ],
                            superclassType: null,
                            superInterfaceTypes: [

                            ],
                            bodyDeclarations: [
                                {
                                    node: "FieldDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    fragments: [
                                        {
                                            node: "VariableDeclarationFragment",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "i"
                                            },
                                            extraDimensions: 0,
                                            initializer: {
                                                node: "NumberLiteral",
                                                token: "42"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
      );
    });

    test("annotation type with several elements", function(assert) {
      var src = multiline(function(){/*
        @interface RequestForEnhancement {
            int id();
            // Unique ID number associated with RFE
            String synopsis(); // Synopsis of RFE
            String engineer(); // Name of engineer who implemented RFE
            String date();
            double pi = 3.14;
            // Date RFE was implemented
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "RequestForEnhancement"
                    },
                    bodyDeclarations: [
                        {
                            node: "AnnotationTypeMemberDeclaration",
                            modifiers: [

                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "int"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "id"
                            },
                            default: null
                        },
                        {
                            node: "AnnotationTypeMemberDeclaration",
                            modifiers: [

                            ],
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "String"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "synopsis"
                            },
                            default: null
                        },
                        {
                            node: "AnnotationTypeMemberDeclaration",
                            modifiers: [

                            ],
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "String"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "engineer"
                            },
                            default: null
                        },
                        {
                            node: "AnnotationTypeMemberDeclaration",
                            modifiers: [

                            ],
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "String"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "date"
                            },
                            default: null
                        },
                        {
                            node: "FieldDeclaration",
                            modifiers: [

                            ],
                            type: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "double"
                            },
                            fragments: [
                                {
                                    node: "VariableDeclarationFragment",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "pi"
                                    },
                                    extraDimensions: 0,
                                    initializer: {
                                        node: "NumberLiteral",
                                        token: "3.14"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
      );
    });

    test("annotation type with default ws modifier", function(assert) {
      var src = multiline(function(){/*
        public @interface RequestForEnhancement {
            @interface ClassPreamble {
               String author();
               String date();
               int currentRevision() default 1;
               String lastModified() default "N/A";
               String lastModifiedBy() default "N/A";
               // Note use of array
               String[] reviewers();
            }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "RequestForEnhancement"
                    },
                    bodyDeclarations: [
                        {
                            node: "AnnotationTypeDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "ClassPreamble"
                            },
                            bodyDeclarations: [
                                {
                                    node: "AnnotationTypeMemberDeclaration",
                                    modifiers: [

                                    ],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "author"
                                    },
                                    default: null
                                },
                                {
                                    node: "AnnotationTypeMemberDeclaration",
                                    modifiers: [

                                    ],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "date"
                                    },
                                    default: null
                                },
                                {
                                    node: "AnnotationTypeMemberDeclaration",
                                    modifiers: [

                                    ],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "currentRevision"
                                    },
                                    default: {
                                        node: "NumberLiteral",
                                        token: "1"
                                    }
                                },
                                {
                                    node: "AnnotationTypeMemberDeclaration",
                                    modifiers: [

                                    ],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "lastModified"
                                    },
                                    default: {
                                        node: "StringLiteral",
                                        escapedValue: "\"N/A\""
                                    }
                                },
                                {
                                    node: "AnnotationTypeMemberDeclaration",
                                    modifiers: [

                                    ],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "lastModifiedBy"
                                    },
                                    default: {
                                        node: "StringLiteral",
                                        escapedValue: "\"N/A\""
                                    }
                                },
                                {
                                    node: "AnnotationTypeMemberDeclaration",
                                    modifiers: [

                                    ],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "String"
                                            }
                                        }
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "reviewers"
                                    },
                                    default: null
                                }
                            ]
                        }
                    ]
                }
            ]
        }
      );
    });

    test("annotation type list", function(assert) {
      var src = multiline(function(){/*
        @interface Ping { Pong value(); }
        @interface Pong { Ping value(); }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "Ping"
                    },
                    bodyDeclarations: [
                        {
                            node: "AnnotationTypeMemberDeclaration",
                            modifiers: [

                            ],
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "Pong"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "value"
                            },
                            default: null
                        }
                    ]
                },
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "Pong"
                    },
                    bodyDeclarations: [
                        {
                            node: "AnnotationTypeMemberDeclaration",
                            modifiers: [

                            ],
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "Ping"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "value"
                            },
                            default: null
                        }
                    ]
                }
            ]
        }
      );
    });

    test("annotation type generic enum", function(assert) {
      var src = multiline(function(){/*
        interface Formatter {}

        @interface PrettyPrinter {
            Class<? extends Formatter> value();
        }

        @interface Quality {
            enum Level { BAD, INDIFFERENT, GOOD }
            Level value();
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [

                    ],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Formatter"
                    },
                    typeParameters: [

                    ],
                    superclassType: null,
                    superInterfaceTypes: [

                    ],
                    bodyDeclarations: [

                    ]
                },
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "PrettyPrinter"
                    },
                    bodyDeclarations: [
                        {
                            node: "AnnotationTypeMemberDeclaration",
                            modifiers: [

                            ],
                            type: {
                                node: "ParameterizedType",
                                type: {
                                    node: "SimpleType",
                                    name: {
                                        node: "SimpleName",
                                        identifier: "Class"
                                    }
                                },
                                typeArguments: [
                                    {
                                        node: "WildcardType",
                                        bound: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "Formatter"
                                            }
                                        },
                                        upperBound: true
                                    }
                                ]
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "value"
                            },
                            default: null
                        }
                    ]
                },
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [

                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "Quality"
                    },
                    bodyDeclarations: [
                        {
                            node: "EnumDeclaration",
                            modifiers: [

                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "Level"
                            },
                            superInterfaceTypes: [

                            ],
                            enumConstants: [
                                {
                                    node: "EnumConstantDeclaration",
                                    modifiers: [

                                    ],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "BAD"
                                    },
                                    arguments: [

                                    ],
                                    anonymousClassDeclaration: null
                                },
                                {
                                    node: "EnumConstantDeclaration",
                                    modifiers: [

                                    ],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "INDIFFERENT"
                                    },
                                    arguments: [

                                    ],
                                    anonymousClassDeclaration: null
                                },
                                {
                                    node: "EnumConstantDeclaration",
                                    modifiers: [

                                    ],
                                    name: {
                                        node: "SimpleName",
                                        identifier: "GOOD"
                                    },
                                    arguments: [

                                    ],
                                    anonymousClassDeclaration: null
                                }
                            ],
                            bodyDeclarations: [

                            ]
                        },
                        {
                            node: "AnnotationTypeMemberDeclaration",
                            modifiers: [

                            ],
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "Level"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "value"
                            },
                            default: null
                        }
                    ]
                }
            ]
        }
      );
    });

    test("Complex Annotation Type Declaration", function(assert) {
      var src = multiline(function(){/*
        @Target(ElementType.METHOD)
        public @interface ReallyComplexAnnotation {
            public SimpleAnnotation value() default @SimpleAnnotation(a="..."); 
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [
                        {
                            node: "SingleMemberAnnotation",
                            typeName: {
                                node: "SimpleName",
                                identifier: "Target"
                            },
                            value: {
                                node: "QualifiedName",
                                qualifier: {
                                    node: "SimpleName",
                                    identifier: "ElementType"
                                },
                                name: {
                                    node: "SimpleName",
                                    identifier: "METHOD"
                                }
                            }
                        },
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "ReallyComplexAnnotation"
                    },
                    bodyDeclarations: [
                        {
                            node: "AnnotationTypeMemberDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "public"
                                }
                            ],
                            type: {
                                node: "SimpleType",
                                name: {
                                    node: "SimpleName",
                                    identifier: "SimpleAnnotation"
                                }
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "value"
                            },
                            default: {
                                node: "NormalAnnotation",
                                typeName: {
                                    node: "SimpleName",
                                    identifier: "SimpleAnnotation"
                                },
                                values: [
                                    {
                                        node: "MemberValuePair",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "a"
                                        },
                                        value: {
                                            node: "StringLiteral",
                                            escapedValue: "\"...\""
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
      );
    });

    test("nested Annotation Type Declaration", function(assert) {
      var src = multiline(function(){/*
        @Target(ElementType.METHOD)
        public @interface ReallyComplexAnnotation {
            protected @interface InnerAnnotation {
                public SimpleAnnotation value() default @SimpleAnnotation(a="..."); 
            } 
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [

            ],
            types: [
                {
                    node: "AnnotationTypeDeclaration",
                    modifiers: [
                        {
                            node: "SingleMemberAnnotation",
                            typeName: {
                                node: "SimpleName",
                                identifier: "Target"
                            },
                            value: {
                                node: "QualifiedName",
                                qualifier: {
                                    node: "SimpleName",
                                    identifier: "ElementType"
                                },
                                name: {
                                    node: "SimpleName",
                                    identifier: "METHOD"
                                }
                            }
                        },
                        {
                            node: "Modifier",
                            keyword: "public"
                        }
                    ],
                    name: {
                        node: "SimpleName",
                        identifier: "ReallyComplexAnnotation"
                    },
                    bodyDeclarations: [
                        {
                            node: "AnnotationTypeDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "protected"
                                }
                            ],
                            name: {
                                node: "SimpleName",
                                identifier: "InnerAnnotation"
                            },
                            bodyDeclarations: [
                                {
                                    node: "AnnotationTypeMemberDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "public"
                                        }
                                    ],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "SimpleAnnotation"
                                        }
                                    },
                                    name: {
                                        node: "SimpleName",
                                        identifier: "value"
                                    },
                                    default: {
                                        node: "NormalAnnotation",
                                        typeName: {
                                            node: "SimpleName",
                                            identifier: "SimpleAnnotation"
                                        },
                                        values: [
                                            {
                                                node: "MemberValuePair",
                                                name: {
                                                    node: "SimpleName",
                                                    identifier: "a"
                                                },
                                                value: {
                                                    node: "StringLiteral",
                                                    escapedValue: "\"...\""
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
      );
    });
