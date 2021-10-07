const express = require("express");
const app = express.Router();



/**
 * @swagger
 * /swagger_test/post_test":
 *   get:
 *     tags: [swagger_test]
 *     summary: "get test"
 *     consumes: [application/json]
 *     produces: [application/json]
 *     parameters:
 *       - name: "next_token"
 *         description: "다음페이지 접근 토큰. 이 API의 리스폰스값을 그대로 받아서 전달하면 됩니다."
 *         in: query
 *         required: false
 *         type: string
 *         example: "eyJsaW1pdCI6MTAsIm9mZnNldCI6MTB9"
 *     responses:
 *       200:
 *         description: "성공."
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "성공 여부"
 *               type: boolean
 *               example: true
 *             list:
 *               description: "목록"
 *               type: array
 *               example: []
 *       400:
 *         description: "잘못된 매개변수"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "성공 여부"
 *               type: boolean
 *               example: false
 *       500:
 *         description: "서버 오류"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "성공 여부"
 *               type: boolean
 *               example: false
 */
app.get('/test', (req, res) => {

    try {
        res.json({ success_yn: 'dddd' })


    } catch (error) {
        console.log(error);
    }

});



/**
 * @swagger
 * "/swagger_test/post_test":
 *   post:
 *     tags: [swagger_test]
 *     summary: "관리자, 혹은 감독으로 가입된 상태에서 배우로 가입할 경우 사용"
 *     consumes: [application/json]
 *     produces: [application/json]
 *     parameters:
 *       - name: "next_token"
 *         description: "다음페이지 접근 토큰. 이 API의 리스폰스값을 그대로 받아서 전달하면 됩니다."
 *         in: body
 *         required: false
 *         type: string
 *         example: "eyJsaW1pdCI6MTAsIm9mZnNldCI6MTB9"
 *     responses:
 *       200:
 *         description: "성공"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "성공 여부"
 *               type: boolean
 *               example: true
 *             already_register:
 *               description: "이미 등록됨"
 *               type: boolean
 *               example: false
 *       400:
 *         description: "잘못된 매개변수"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "성공 여부"
 *               type: boolean
 *               example: false
 *       500:
 *         description: "서버 오류"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "성공 여부"
 *               type: boolean
 *               example: false
 */





module.exports = app;